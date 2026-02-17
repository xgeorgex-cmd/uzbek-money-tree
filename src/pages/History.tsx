import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from '@/components/BottomNav';
import { expenseCategories } from '@/data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Filter, X, Sparkles } from 'lucide-react';

const formatSum = (amount: number) => Math.abs(amount).toLocaleString('ru-RU');

type FilterType = 'all' | 'income' | 'expense' | 'savings' | 'cash';

const History = () => {
  const { t } = useLanguage();
  const { transactions } = useApp();
  const [filter, setFilter] = useState<FilterType>('all');
  const [showDonutDetail, setShowDonutDetail] = useState(false);
  const [donutPeriod, setDonutPeriod] = useState<string>('month');

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t('historyAll') },
    { key: 'income', label: t('historyIncome') },
    { key: 'expense', label: t('historyExpense') },
    { key: 'savings', label: t('historySavings') },
    { key: 'cash', label: t('historyCash') },
  ];

  const filtered = filter === 'all' ? transactions : transactions.filter(tx => tx.type === filter);

  // Category donut data for expenses
  const expenseTxs = transactions.filter(tx => tx.type === 'expense' || tx.type === 'cash');
  const categoryTotals: Record<string, number> = {};
  expenseTxs.forEach(tx => {
    const cat = tx.category || 'other';
    categoryTotals[cat] = (categoryTotals[cat] || 0) + Math.abs(tx.amount);
  });
  const donutData = Object.entries(categoryTotals).map(([key, value]) => ({
    name: expenseCategories[key]?.label || key,
    value,
    color: expenseCategories[key]?.color || '#B8B8B8',
    emoji: expenseCategories[key]?.emoji || '📦',
  }));
  const totalExpenses = donutData.reduce((s, d) => s + d.value, 0);

  const typeColor = (type: string) => {
    if (type === 'income') return 'bg-success/15 text-success';
    if (type === 'savings') return 'bg-savings/15 text-savings-foreground';
    if (type === 'cash') return 'bg-accent/15 text-accent';
    return 'bg-destructive/10 text-destructive';
  };

  const typeSign = (type: string, amount: number) => {
    if (type === 'income') return `+${formatSum(amount)}`;
    return `-${formatSum(amount)}`;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-2">{t('historyTitle')}</h1>
        <p className="text-xs text-muted-foreground font-semibold mb-4">{t('historyTotalOps')}: {transactions.length}</p>

        {/* Donut chart */}
        {donutData.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-4 shadow-card mb-4 cursor-pointer"
            onClick={() => setShowDonutDetail(true)}
          >
            <p className="text-sm font-bold mb-3">{t('historyDonutTitle')}</p>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} innerRadius={25} outerRadius={45} dataKey="value" stroke="none">
                      {donutData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-1">
                {donutData.slice(0, 4).map((d, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                    <span className="font-semibold truncate">{d.emoji} {d.name}</span>
                    <span className="ml-auto font-bold">{formatSum(d.value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Financial advice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-savings/15 border border-savings/30 rounded-2xl p-4 flex items-start gap-3 mb-4"
        >
          <Sparkles className="text-savings shrink-0 mt-0.5" size={18} />
          <p className="text-xs font-semibold text-foreground/80 leading-relaxed">{t('historyFinAdvice')}</p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          {filters.map(f => (
            <motion.button
              key={f.key}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(f.key)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === f.key ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-muted-foreground'
              }`}
            >
              {f.label}
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-muted-foreground font-semibold">{t('historyEmpty')}</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((tx, i) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="bg-card rounded-2xl p-3 shadow-card flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg">
                  {tx.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{tx.description}</p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
                <span className={`text-sm font-black px-3 py-1 rounded-lg ${typeColor(tx.type)}`}>
                  {typeSign(tx.type, tx.amount)}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Donut detail modal */}
      <AnimatePresence>
        {showDonutDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end"
            onClick={() => setShowDonutDetail(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black">{t('historyDonutTitle')}</h2>
                <button onClick={() => setShowDonutDetail(false)} className="p-2 rounded-xl bg-secondary"><X size={18} /></button>
              </div>

              {/* Period selector */}
              <div className="flex gap-2 mb-6">
                {[
                  { key: 'month', label: t('historyLastMonth') },
                  { key: '3months', label: t('historyLast3Months') },
                  { key: 'year', label: t('historyLastYear') },
                ].map(p => (
                  <button
                    key={p.key}
                    onClick={() => setDonutPeriod(p.key)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold ${
                      donutPeriod === p.key ? 'gradient-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="w-40 h-40 mx-auto mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} innerRadius={40} outerRadius={70} dataKey="value" stroke="none">
                      {donutData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                {donutData.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 bg-secondary rounded-xl p-3">
                    <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                    <span className="text-lg">{d.emoji}</span>
                    <span className="font-bold text-sm flex-1">{d.name}</span>
                    <div className="text-right">
                      <p className="font-black text-sm">{formatSum(d.value)} {t('currencySuffix')}</p>
                      <p className="text-xs text-muted-foreground">{totalExpenses > 0 ? Math.round((d.value / totalExpenses) * 100) : 0}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
};

export default History;
