import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Transaction, expenseCategories } from '@/data/mockData';
import { useLanguage } from '@/contexts/LanguageContext';
  currencySuffix: string;
  title: string;
}

const DONUT_SIZE = 160;
const STROKE_WIDTH = 28;
const RADIUS = (DONUT_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SpendingDonut = ({ transactions, currencySuffix, title }: SpendingDonutProps) => {
  const { categories, totalExpense } = useMemo(() => {
    const expenseTxs = transactions.filter(tx => tx.type === 'expense' || tx.type === 'cash');
    const total = expenseTxs.reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
    
    const catMap: Record<string, number> = {};
    expenseTxs.forEach(tx => {
      const cat = tx.category || 'other';
      catMap[cat] = (catMap[cat] || 0) + Math.abs(tx.amount);
    });

    const cats = Object.entries(catMap)
      .map(([key, amount]) => ({
        key,
        amount,
        percent: total > 0 ? amount / total : 0,
        ...expenseCategories[key] || { label: key, emoji: '📦', color: '#B8B8B8' },
      }))
      .sort((a, b) => b.amount - a.amount);

    return { categories: cats, totalExpense: total };
  }, [transactions]);

  let cumulativePercent = 0;

  return (
    <div className="bg-card rounded-3xl p-5 shadow-card">
      <p className="text-xs font-bold text-muted-foreground mb-4">{title}</p>
      
      <div className="flex items-center gap-5 mb-4">
        {/* Donut SVG */}
        <div className="relative shrink-0" style={{ width: DONUT_SIZE, height: DONUT_SIZE }}>
          <svg width={DONUT_SIZE} height={DONUT_SIZE} viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`}>
            {categories.map((cat, i) => {
              const offset = cumulativePercent * CIRCUMFERENCE;
              const dash = cat.percent * CIRCUMFERENCE;
              cumulativePercent += cat.percent;
              return (
                <motion.circle
                  key={cat.key}
                  cx={DONUT_SIZE / 2}
                  cy={DONUT_SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  stroke={cat.color}
                  strokeWidth={STROKE_WIDTH}
                  strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
                  strokeDashoffset={-offset}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${DONUT_SIZE / 2} ${DONUT_SIZE / 2})`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-xs text-muted-foreground font-semibold">Всего</p>
            <p className="text-sm font-black">{(totalExpense / 1000).toFixed(0)}k</p>
          </div>
        </div>

        {/* Legend - top 3 */}
        <div className="flex-1 space-y-2">
          {categories.slice(0, 3).map((cat) => (
            <div key={cat.key} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
              <span className="text-xs font-semibold text-foreground/80 truncate">{cat.emoji} {cat.label}</span>
              <span className="text-xs font-bold text-foreground ml-auto">{Math.round(cat.percent * 100)}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category list */}
      <div className="space-y-1">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="flex items-center gap-3 py-2.5 border-b border-border/50 last:border-0"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
              style={{ backgroundColor: cat.color + '22' }}
            >
              {cat.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">{cat.label}</p>
              <p className="text-xs text-muted-foreground">
                {transactions.filter(tx => tx.category === cat.key).length} операций
              </p>
            </div>
            <p className="text-sm font-black">
              {cat.amount.toLocaleString('ru-RU')} {currencySuffix}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpendingDonut;
