import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import TreeProgress from '@/components/TreeProgress';
import { goalEmojis } from '@/data/mockData';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const Goals = () => {
  const { t } = useLanguage();
  const { goals, balance, addGoal, contributeToGoal } = useApp();
  const [showCreate, setShowCreate] = useState(false);
  const [activeGoalId, setActiveGoalId] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [newGoal, setNewGoal] = useState({ name: '', targetAmount: '', reason: '', emoji: '🎯' });

  const handleCreate = () => {
    const amount = parseInt(newGoal.targetAmount.replace(/\D/g, ''));
    if (!newGoal.name || !amount) return;
    addGoal({ name: newGoal.name, targetAmount: amount, reason: newGoal.reason, emoji: newGoal.emoji });
    setNewGoal({ name: '', targetAmount: '', reason: '', emoji: '🎯' });
    setShowCreate(false);
  };

  const handleContribute = (goalId: string) => {
    if (sliderValue > 0) {
      contributeToGoal(goalId, sliderValue);
      setSliderValue(0);
      setActiveGoalId(null);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-black">{t('goalsTitle')}</h1>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowCreate(true)}
            className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shadow-button"
          >
            <Plus size={20} className="text-primary-foreground" />
          </motion.button>
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
                  {/* Tree tamagotchi */}
                  <TreeProgress progress={progress} size={80} />

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{goal.emoji}</span>
                      <h3 className="font-bold">{goal.name}</h3>
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
                      <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-success font-bold text-sm mt-2"
                      >
                        {t('goalsCompleted')}
                      </motion.p>
                    ) : (
                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setActiveGoalId(isActive ? null : goal.id)}
                        className="mt-3 gradient-warm text-accent-foreground font-bold text-xs py-2 px-4 rounded-xl shadow-button"
                      >
                        {t('goalsSetAside')}
                      </motion.button>
                    )}
                  </div>
                </div>

                {/* Contribution slider */}
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
                          onChange={e => setSliderValue(Number(e.target.value))}
                          className="w-full accent-primary h-2"
                        />
                        <p className="text-center font-black text-lg my-2 text-primary">
                          {formatSum(sliderValue)} {t('currencySuffix')}
                        </p>
                        <motion.button
                          whileTap={{ scale: 0.97 }}
                          onClick={() => handleContribute(goal.id)}
                          disabled={sliderValue === 0}
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

      {/* Create goal modal */}
      <AnimatePresence>
        {showCreate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-50 flex items-end"
            onClick={() => setShowCreate(false)}
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
                <h2 className="text-xl font-black">{t('goalsCreate')}</h2>
                <button onClick={() => setShowCreate(false)} className="p-2 rounded-xl bg-secondary">
                  <X size={18} />
                </button>
              </div>

              {/* Emoji picker */}
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
                {t('goalsSave')}
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
