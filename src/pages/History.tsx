import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from '@/components/BottomNav';
import { expenseCategories, Transaction } from '@/data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { X, Sparkles, Receipt } from 'lucide-react';

const formatSum = (amount: number) => Math.abs(amount).toLocaleString('ru-RU');

type FilterType = 'all' | 'income' | 'expense' | 'savings' | 'cash';
type PeriodType = 'month' | '3months' | 'year';

const History = () => {
  const { t } = useLanguage();
  const { transactions } = useApp();
  const [filter, setFilter] = useState<FilterType>('all');
  const [period, setPeriod] = useState<PeriodType>('3months');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [showDonutDetail, setShowDonutDetail] = useState(false);
  const [donutPeriod, setDonutPeriod] = useState<string>('month');
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t('historyAll') },
    { key: 'income', label: t('historyIncome') },
    { key: 'expense', label: t('historyExpense') },
    { key: 'savings', label: t('historySavings') },
    { key: 'cash', label: t('historyCash') },
  ];

  const periods: { key: PeriodType; label: string }[] = [
    { key: 'month', label: t('historyLastMonth') },
    { key: '3months', label: t('historyLast3Months') },
    { key: 'year', label: t('historyLastYear') },
  ];

  let filtered = filter === 'all' ? transactions : transactions.filter(tx => tx.type === filter);
  const minAmt = parseInt(minAmount) || 0;
  const maxAmt = parseInt(maxAmount) || Infinity;
  if (minAmt > 0 || maxAmt < Infinity) {
    filtered = filtered.filter(tx => Math.abs(tx.amount) >= minAmt && Math.abs(tx.amount) <= maxAmt);
  }

  // Category donut data
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

  const typeLabel = (type: string) => {
    if (type === 'income') return t('historyIncome');
    if (type === 'expense') return t('historyExpense');
    if (type === 'savings') return t('historySavings');
    return t('historyCash');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-2">{t('historyTitle')}</h1>
        <p className="text-xs text-muted-foreground font-semibold mb-4">{t('historyTotalOps')}: {transactions.length}</p>

        {/* Donut chart */}
        {donutData.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-4 shadow-card mb-4 cursor-pointer" onClick={() => setShowDonutDetail(true)}>
            <p className="text-sm font-bold mb-3">{t('historyDonutTitle')}</p>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} innerRadius={25} outerRadius={45} dataKey="value" stroke="none">
                      {donutData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
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
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="bg-savings/15 border border-savings/30 rounded-3xl p-4 flex items-start gap-3 mb-4">
          <Sparkles className="text-savings shrink-0 mt-0.5" size={18} />
          <p className="text-xs font-semibold text-foreground/80 leading-relaxed">{t('historyFinAdvice')}</p>
        </motion.div>

        {/* Filter: type */}
        <p className="text-xs font-bold text-muted-foreground mb-2">{t('historyFilterType')}</p>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-3 scrollbar-hide">
          {filters.map(f => (
            <motion.button key={f.key} whileTap={{ scale: 0.95 }} onClick={() => setFilter(f.key)}
              className={`shrink-0 px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                filter === f.key ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-muted-foreground'
              }`}>
              {f.label}
            </motion.button>
          ))}
        </div>

        {/* Filter: period */}
        <p className="text-xs font-bold text-muted-foreground mb-2">{t('historyFilterPeriod')}</p>
        <div className="flex gap-2 mb-3">
          {periods.map(p => (
            <button key={p.key} onClick={() => setPeriod(p.key)}
              className={`flex-1 py-3 rounded-2xl text-xs font-bold ${period === p.key ? 'gradient-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
              {p.label}
            </button>
          ))}
        </div>

        {/* Filter: amount */}
        <p className="text-xs font-bold text-muted-foreground mb-2">{t('historyFilterAmount')}</p>
        <div className="flex gap-2 mb-4">
          <input value={minAmount} onChange={e => setMinAmount(e.target.value.replace(/\D/g, ''))}
            placeholder={t('historyMinAmount')} inputMode="numeric"
            className="flex-1 bg-secondary text-foreground font-bold p-3 rounded-2xl text-center text-sm outline-none focus:ring-2 focus:ring-primary" />
          <input value={maxAmount} onChange={e => setMaxAmount(e.target.value.replace(/\D/g, ''))}
            placeholder={t('historyMaxAmount')} inputMode="numeric"
            className="flex-1 bg-secondary text-foreground font-bold p-3 rounded-2xl text-center text-sm outline-none focus:ring-2 focus:ring-primary" />
        </div>

        {filtered.length === 0 ? (
          <div className="text-center mt-16">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-muted-foreground font-semibold">{t('historyEmpty')}</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((tx, i) => (
              <motion.div key={tx.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}
                onClick={() => setSelectedTx(tx)}
                className="bg-card rounded-3xl p-4 shadow-card flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-lg">{tx.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{tx.description}</p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
                <span className={`text-sm font-black px-3 py-1.5 rounded-xl ${typeColor(tx.type)}`}>
                  {typeSign(tx.type, tx.amount)}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Transaction detail modal */}
      <AnimatePresence>
        {selectedTx && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-center justify-center p-6" onClick={() => setSelectedTx(null)}>
            <motion.div initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 30 }}
              onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Receipt size={18} className="text-primary" />
                  <h2 className="text-lg font-black">{t('historyTxDetail')}</h2>
                </div>
                <button onClick={() => setSelectedTx(null)} className="p-2 rounded-full bg-secondary"><X size={16} /></button>
              </div>
              <div className="text-5xl text-center mb-4">{selectedTx.icon}</div>
              <div className="space-y-3">
                <div className="bg-secondary rounded-2xl p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('historyTxDate')}</span>
                  <span className="text-sm font-bold">{selectedTx.date}</span>
                </div>
                <div className="bg-secondary rounded-2xl p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('historyTxType')}</span>
                  <span className={`text-sm font-bold px-2 py-0.5 rounded-lg ${typeColor(selectedTx.type)}`}>{typeLabel(selectedTx.type)}</span>
                </div>
                <div className="bg-secondary rounded-2xl p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('historyTxSource')}</span>
                  <span className="text-sm font-bold">{selectedTx.source}</span>
                </div>
                <div className="bg-secondary rounded-2xl p-3 flex justify-between">
                  <span className="text-sm text-muted-foreground">{t('historyTxAmount')}</span>
                  <span className={`text-sm font-black ${selectedTx.type === 'income' ? 'text-success' : 'text-destructive'}`}>
                    {typeSign(selectedTx.type, selectedTx.amount)} {t('currencySuffix')}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Donut detail modal */}
      <AnimatePresence>
        {showDonutDetail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end" onClick={() => setShowDonutDetail(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-black">{t('historyDonutTitle')}</h2>
                <button onClick={() => setShowDonutDetail(false)} className="p-2 rounded-2xl bg-secondary"><X size={18} /></button>
              </div>
              <div className="flex gap-2 mb-6">
                {[
                  { key: 'month', label: t('historyLastMonth') },
                  { key: '3months', label: t('historyLast3Months') },
                  { key: 'year', label: t('historyLastYear') },
                ].map(p => (
                  <button key={p.key} onClick={() => setDonutPeriod(p.key)}
                    className={`flex-1 py-3 rounded-2xl text-xs font-bold ${donutPeriod === p.key ? 'gradient-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="w-40 h-40 mx-auto mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={donutData} innerRadius={40} outerRadius={70} dataKey="value" stroke="none">
                      {donutData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {donutData.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 bg-secondary rounded-2xl p-3">
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
