import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Edit2, Calculator, Sparkles, Heart } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import PhoenixProgress from '@/components/PhoenixProgress';
import { goalEmojis } from '@/data/mockData';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const Goals = () => {
  const { t } = useLanguage();
  const { goals, balance, addGoal, contributeToGoal } = useApp();
  const [showCreate, setShowCreate] = useState(false);
  const [editGoalId, setEditGoalId] = useState<string | null>(null);
  const [activeGoalId, setActiveGoalId] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [manualAmount, setManualAmount] = useState('');
  const [newGoal, setNewGoal] = useState({ name: '', targetAmount: '', reason: '', emoji: '🎯' });
  const [showCalc, setShowCalc] = useState(false);
  const [calcAmount, setCalcAmount] = useState('');
  const [calcFreq, setCalcFreq] = useState<'daily' | 'weekly' | 'biweekly' | 'monthly'>('daily');
  const [showAskParents, setShowAskParents] = useState<string | null>(null);

  const totalSavings = goals.reduce((s, g) => s + g.currentAmount, 0);
  const interestEarned = Math.round(totalSavings * 0.15 / 12); // mock monthly interest

  const handleCreate = () => {
    const amount = parseInt(newGoal.targetAmount.replace(/\D/g, ''));
    if (!newGoal.name || !amount) return;
    addGoal({ name: newGoal.name, targetAmount: amount, reason: newGoal.reason, emoji: newGoal.emoji });
    setNewGoal({ name: '', targetAmount: '', reason: '', emoji: '🎯' });
    setShowCreate(false);
  };

  const handleStartEdit = (goalId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (goal) {
      setNewGoal({ name: goal.name, targetAmount: goal.targetAmount.toString(), reason: goal.reason, emoji: goal.emoji });
      setEditGoalId(goalId);
      setShowCreate(true);
    }
  };

  const handleContribute = (goalId: string) => {
    const amount = manualAmount ? parseInt(manualAmount.replace(/\D/g, '')) : sliderValue;
    if (amount > 0) {
      contributeToGoal(goalId, amount);
      setSliderValue(0);
      setManualAmount('');
      setActiveGoalId(null);
    }
  };

  // Calculator logic
  const calcAmountNum = parseInt(calcAmount.replace(/\D/g, '')) || 0;
  const freqMultiplier = { daily: 30, weekly: 4.3, biweekly: 2.15, monthly: 1 };
  const annualRate = 0.15;
  const monthlyContribution = calcAmountNum * freqMultiplier[calcFreq];
  const calcResults = {
    m1: Math.round(monthlyContribution * 1 * (1 + annualRate / 12)),
    m3: Math.round(monthlyContribution * 3 * (1 + annualRate / 12 * 3)),
    y1: Math.round(monthlyContribution * 12 * (1 + annualRate / 2)),
  };

  const frequencies = [
    { key: 'daily' as const, label: t('goalsCalcDaily') },
    { key: 'weekly' as const, label: t('goalsCalcWeekly') },
    { key: 'biweekly' as const, label: t('goalsCalcBiweekly') },
    { key: 'monthly' as const, label: t('goalsCalcMonthly') },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-black">{t('goalsTitle')}</h1>
          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowCalc(true)}
              className="w-10 h-10 bg-savings/20 rounded-xl flex items-center justify-center"
            >
              <Calculator size={18} className="text-savings-foreground" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => { setEditGoalId(null); setNewGoal({ name: '', targetAmount: '', reason: '', emoji: '🎯' }); setShowCreate(true); }}
              className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-button"
            >
              <Plus size={20} className="text-primary-foreground" />
            </motion.button>
          </div>
        </div>

        {/* Financial advice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-savings/15 border border-savings/30 rounded-2xl p-4 flex items-start gap-3 mb-4"
        >
          <Sparkles className="text-savings shrink-0 mt-0.5" size={18} />
          <p className="text-xs font-semibold text-foreground/80 leading-relaxed">{t('goalsFinAdvice')}</p>
        </motion.div>

        {/* Summary */}
        <div className="bg-card rounded-2xl p-4 shadow-card mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-semibold">{t('goalsTotalBalance')}</p>
            <p className="text-xl font-black text-primary">{formatSum(totalSavings)} {t('currencySuffix')}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground font-semibold">{t('goalsInterestEarned')}</p>
            <p className="text-sm font-bold text-success">+{formatSum(interestEarned)} {t('currencySuffix')}</p>
          </div>
        </div>

        {/* Goals list */}
        <div className="space-y-4">
          {goals.map((goal, i) => {
            const progress = goal.currentAmount / goal.targetAmount;
            const isActive = activeGoalId === goal.id;
            const isCompleted = progress >= 1;

            return (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-5 shadow-card"
              >
                <div className="flex items-start gap-4">
                  <PhoenixProgress progress={progress} size={70} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{goal.emoji}</span>
                      <h3 className="font-bold flex-1">{goal.name}</h3>
                      {!isCompleted && (
                        <button onClick={() => handleStartEdit(goal.id)} className="p-1.5 rounded-lg bg-secondary">
                          <Edit2 size={14} className="text-muted-foreground" />
                        </button>
                      )}
                    </div>
                    {goal.reason && <p className="text-xs text-muted-foreground mb-2">{goal.reason}</p>}

                    <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden mb-1.5">
                      <motion.div
                        className="h-full gradient-success rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress * 100, 100)}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold">
                      {formatSum(goal.currentAmount)} / {formatSum(goal.targetAmount)} {t('currencySuffix')}
                    </p>

                    {isCompleted ? (
                      <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-success font-bold text-sm mt-2">
                        {t('goalsCompleted')}
                      </motion.p>
                    ) : (
                      <div className="flex gap-2 mt-3">
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setActiveGoalId(isActive ? null : goal.id)}
                          className="gradient-warm text-accent-foreground font-bold text-xs py-2 px-4 rounded-xl shadow-button"
                        >
                          {t('goalsSetAside')}
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setShowAskParents(goal.id)}
                          className="bg-primary/10 text-primary font-bold text-xs py-2 px-3 rounded-xl"
                        >
                          <Heart size={14} />
                        </motion.button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contribution area */}
                <AnimatePresence>
                  {isActive && !isCompleted && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 pt-4 border-t border-border">
                        <input
                          type="range"
                          min={0}
                          max={Math.min(balance, goal.targetAmount - goal.currentAmount)}
                          step={1000}
                          value={sliderValue}
                          onChange={e => { setSliderValue(Number(e.target.value)); setManualAmount(''); }}
                          className="w-full accent-primary h-2"
                        />
                        <p className="text-center font-black text-lg my-2 text-primary">
                          {formatSum(manualAmount ? parseInt(manualAmount.replace(/\D/g, '')) || 0 : sliderValue)} {t('currencySuffix')}
                        </p>

                        {/* Manual input */}
                        <p className="text-xs text-muted-foreground font-semibold mb-1">{t('goalsManualAmount')}</p>
                        <input
                          value={manualAmount}
                          onChange={e => { setManualAmount(e.target.value.replace(/\D/g, '').slice(0, 10)); setSliderValue(0); }}
                          placeholder="0"
                          inputMode="numeric"
                          className="w-full bg-secondary text-foreground font-bold p-3 rounded-xl mb-3 outline-none focus:ring-2 focus:ring-primary text-center"
                        />

                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleContribute(goal.id)}
                          disabled={(manualAmount ? parseInt(manualAmount.replace(/\D/g, '')) || 0 : sliderValue) === 0}
                          className="w-full gradient-primary text-primary-foreground font-bold py-3 rounded-xl shadow-button disabled:opacity-40"
                        >
                          {t('goalsConfirm')}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Ask parents modal */}
      <AnimatePresence>
        {showAskParents && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-center justify-center p-6"
            onClick={() => setShowAskParents(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-6 w-full max-w-sm text-center"
            >
              <div className="text-6xl mb-4">🙏</div>
              <h2 className="text-xl font-black mb-2">{t('goalsAskParentsAdd')}</h2>
              <p className="text-muted-foreground text-sm mb-6">
                {goals.find(g => g.id === showAskParents)?.name} — {formatSum(goals.find(g => g.id === showAskParents)?.targetAmount || 0)} {t('currencySuffix')}
              </p>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowAskParents(null)}
                className="w-full gradient-primary text-primary-foreground font-bold py-3 rounded-xl shadow-button"
              >
                {t('feedbackSend')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Calculator modal */}
      <AnimatePresence>
        {showCalc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end"
            onClick={() => setShowCalc(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black">{t('goalsCalculator')}</h2>
                <button onClick={() => setShowCalc(false)} className="p-2 rounded-xl bg-secondary"><X size={18} /></button>
              </div>

              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsCalcHowMuch')}</label>
              <input
                value={calcAmount}
                onChange={e => setCalcAmount(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10 000"
                inputMode="numeric"
                className="w-full bg-secondary text-foreground font-bold p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl"
              />

              <label className="text-sm font-bold text-muted-foreground mb-2 block">{t('goalsCalcFrequency')}</label>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {frequencies.map(f => (
                  <button
                    key={f.key}
                    onClick={() => setCalcFreq(f.key)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      calcFreq === f.key ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <p className="text-xs text-muted-foreground text-center mb-4">{t('goalsCalcRate')}</p>

              {calcAmountNum > 0 && (
                <div className="space-y-3 mb-6">
                  {[
                    { label: t('goalsCalcResult1m'), value: calcResults.m1 },
                    { label: t('goalsCalcResult3m'), value: calcResults.m3 },
                    { label: t('goalsCalcResult1y'), value: calcResults.y1 },
                  ].map((r, i) => (
                    <div key={i} className="bg-secondary rounded-xl p-3 flex justify-between items-center">
                      <p className="text-sm font-semibold">{r.label}</p>
                      <p className="font-black text-primary">{formatSum(r.value)} {t('currencySuffix')}</p>
                    </div>
                  ))}
                </div>
              )}

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => { setShowCalc(false); setShowCreate(true); }}
                className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button"
              >
                {t('goalsCalcOpenPiggy')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create/Edit goal modal */}
      <AnimatePresence>
        {showCreate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-50 flex items-end"
            onClick={() => { setShowCreate(false); setEditGoalId(null); }}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black">{editGoalId ? t('goalsEdit') : t('goalsCreate')}</h2>
                <button onClick={() => { setShowCreate(false); setEditGoalId(null); }} className="p-2 rounded-xl bg-secondary">
                  <X size={18} />
                </button>
              </div>

              <div className="flex gap-2 flex-wrap mb-5">
                {goalEmojis.map(e => (
                  <button
                    key={e}
                    onClick={() => setNewGoal(g => ({ ...g, emoji: e }))}
                    className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center ${
                      newGoal.emoji === e ? 'bg-primary/15 ring-2 ring-primary' : 'bg-secondary'
                    }`}
                  >
                    {e}
                  </button>
                ))}
              </div>

              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsName')}</label>
              <input
                value={newGoal.name}
                onChange={e => setNewGoal(g => ({ ...g, name: e.target.value.slice(0, 30) }))}
                placeholder={t('goalsNamePlaceholder')}
                className="w-full bg-secondary text-foreground font-bold p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-primary"
              />

              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsAmount')}</label>
              <input
                value={newGoal.targetAmount}
                onChange={e => setNewGoal(g => ({ ...g, targetAmount: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                placeholder={t('goalsAmountPlaceholder')}
                inputMode="numeric"
                className="w-full bg-secondary text-foreground font-bold p-3 rounded-xl mb-4 outline-none focus:ring-2 focus:ring-primary"
              />

              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsReason')}</label>
              <input
                value={newGoal.reason}
                onChange={e => setNewGoal(g => ({ ...g, reason: e.target.value.slice(0, 60) }))}
                placeholder={t('goalsReasonPlaceholder')}
                className="w-full bg-secondary text-foreground font-bold p-3 rounded-xl mb-6 outline-none focus:ring-2 focus:ring-primary"
              />

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleCreate}
                className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button"
              >
                {editGoalId ? t('goalsUpdate') : t('goalsSave')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
};

export default Goals;
