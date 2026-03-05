import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Edit2, Calculator, Sparkles, Heart, Calendar, ArrowDownCircle, Wallet, Trash2, ArrowLeft, ChevronRight, Info, MoreHorizontal } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import OperationNotification from '@/components/OperationNotification';
import { goalEmojis } from '@/data/mockData';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

// Tree-style progress
const JourneyProgress = ({ progress, emoji, currentAmount, targetAmount }: { progress: number; emoji: string; currentAmount: number; targetAmount: number }) => {
  const pct = Math.min(Math.round(progress * 100), 100);
  const milestones = [
    { at: 0, icon: '🌱', label: 'Старт' },
    { at: 25, icon: '🌿', label: '25%' },
    { at: 50, icon: '🌳', label: '50%' },
    { at: 75, icon: '🌸', label: '75%' },
    { at: 100, icon: '🏆', label: 'Цель!' },
  ];

  return (
    <div className="my-3">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-[11px] font-bold text-muted-foreground">{formatSum(currentAmount)}</span>
        <span className="text-[11px] font-bold text-muted-foreground">из {formatSum(targetAmount)}</span>
      </div>
      <div className="relative h-8 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 gradient-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 text-xl z-10"
          initial={{ left: '0%' }}
          animate={{ left: `calc(${pct}% - 12px)` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {emoji}
        </motion.div>
      </div>
      <div className="flex justify-between mt-1.5">
        {milestones.map(m => {
          const reached = pct >= m.at;
          return (
            <div key={m.at} className="flex flex-col items-center">
              <span className={`text-sm ${reached ? '' : 'grayscale opacity-40'}`}>{m.icon}</span>
              <span className={`text-[9px] font-bold ${reached ? 'text-primary' : 'text-muted-foreground'}`}>{m.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Goals = () => {
  const { t } = useLanguage();
  const { goals, balance, addGoal, contributeToGoal, withdrawFromGoal, deleteGoal } = useApp();
  const [showCreate, setShowCreate] = useState(false);
  const [editGoalId, setEditGoalId] = useState<string | null>(null);
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null);
  const [activeGoalId, setActiveGoalId] = useState<string | null>(null);
  const [manualAmount, setManualAmount] = useState('');
  const [newGoal, setNewGoal] = useState({ name: '', targetAmount: '', reason: '', emoji: '🎯', deadline: '' });
  const [showCalc, setShowCalc] = useState(false);
  const [calcAmount, setCalcAmount] = useState('');
  const [calcFreq, setCalcFreq] = useState<'daily' | 'weekly' | 'biweekly' | 'monthly'>('daily');
  const [showAskParents, setShowAskParents] = useState<string | null>(null);
  const [askParentWho, setAskParentWho] = useState<'dad' | 'mom' | 'grandma'>('dad');
  const [askParentAmount, setAskParentAmount] = useState('');
  const [askParentMessage, setAskParentMessage] = useState('');
  const [showWithdraw, setShowWithdraw] = useState<string | null>(null);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [closeGoalId, setCloseGoalId] = useState<string | null>(null);

  const [notif, setNotif] = useState<{ open: boolean; title: string; emoji: string; amount?: number; type?: string; description?: string }>({
    open: false, title: '', emoji: '', amount: undefined, type: '', description: ''
  });

  const totalSavings = goals.reduce((s, g) => s + g.currentAmount, 0);
  const interestEarned = Math.round(totalSavings * 0.15 / 12);

  const showNotification = (title: string, emoji: string, amount?: number, type?: string, description?: string) => {
    setNotif({ open: true, title, emoji, amount, type, description });
  };

  const selectedGoal = goals.find(g => g.id === selectedGoalId);

  const handleCreate = () => {
    const amount = parseInt(newGoal.targetAmount.replace(/\D/g, ''));
    if (!newGoal.name || !amount) return;
    addGoal({ name: newGoal.name, targetAmount: amount, reason: newGoal.reason, emoji: newGoal.emoji, deadline: newGoal.deadline || undefined });
    setNewGoal({ name: '', targetAmount: '', reason: '', emoji: '🎯', deadline: '' });
    setShowCreate(false);
    showNotification(
      editGoalId ? t('goalsUpdate') : t('goalsSave'),
      editGoalId ? '✅' : '🎉',
      undefined, undefined, newGoal.name
    );
    setEditGoalId(null);
  };

  const handleStartEdit = (goalId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (goal) {
      setNewGoal({ name: goal.name, targetAmount: goal.targetAmount.toString(), reason: goal.reason, emoji: goal.emoji, deadline: goal.deadline || '' });
      setEditGoalId(goalId);
      setShowCreate(true);
    }
  };

  const handleContribute = (goalId: string) => {
    const amount = manualAmount ? parseInt(manualAmount.replace(/\D/g, '')) : 0;
    if (amount > 0) {
      const goalName = goals.find(g => g.id === goalId)?.name || '';
      contributeToGoal(goalId, amount);
      setManualAmount('');
      setActiveGoalId(null);
      showNotification(t('goalsConfirm'), '✅', -amount, t('goalsTopUp'), goalName);
    }
  };

  const handleWithdraw = (goalId: string) => {
    const amount = parseInt(withdrawAmount.replace(/\D/g, ''));
    if (amount > 0) {
      const goalName = goals.find(g => g.id === goalId)?.name || '';
      withdrawFromGoal(goalId, amount);
      setWithdrawAmount('');
      setShowWithdraw(null);
      showNotification(t('goalsWithdrawSuccess'), '💰', amount, t('goalsWithdraw'), goalName);
    }
  };

  const handleOpenAskParents = (goalId: string) => {
    const goal = goals.find(g => g.id === goalId);
    if (goal) {
      const tenPercent = Math.round(goal.targetAmount * 0.1);
      setAskParentAmount(tenPercent.toString());
      setAskParentMessage(t('goalsAskParentsMessagePlaceholder'));
      setAskParentWho('dad');
      setShowAskParents(goalId);
    }
  };

  const handleSendParentRequest = () => {
    setShowAskParents(null);
    showNotification(t('requestMoneySent'), '💌', undefined, t('goalsAskParentsSend'));
  };

  const handleCloseGoal = () => {
    if (!closeGoalId) return;
    const goal = goals.find(g => g.id === closeGoalId);
    deleteGoal(closeGoalId);
    setCloseGoalId(null);
    setShowCreate(false);
    setEditGoalId(null);
    setSelectedGoalId(null);
    showNotification(t('goalsClosedSuccess'), '💸', goal?.currentAmount || undefined, undefined, goal?.name);
  };

  const calcAmountNum = parseInt(calcAmount.replace(/\D/g, '')) || 0;
  const freqMultiplier = { daily: 30, weekly: 4.3, biweekly: 2.15, monthly: 1 };
  const monthlyContribution = calcAmountNum * freqMultiplier[calcFreq];
  const calcResults = {
    m1: Math.round(monthlyContribution * 1 * (1 + 0.15 / 12)),
    m3: Math.round(monthlyContribution * 3 * (1 + 0.15 / 12 * 3)),
    y1: Math.round(monthlyContribution * 12 * (1 + 0.15 / 2)),
  };

  const frequencies = [
    { key: 'daily' as const, label: t('goalsCalcDaily') },
    { key: 'weekly' as const, label: t('goalsCalcWeekly') },
    { key: 'biweekly' as const, label: t('goalsCalcBiweekly') },
    { key: 'monthly' as const, label: t('goalsCalcMonthly') },
  ];

  const getDaysLeft = (deadline?: string) => {
    if (!deadline) return null;
    const diff = Math.ceil((new Date(deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  const parentOptions = [
    { key: 'dad' as const, label: t('goalsAskParentsDad'), emoji: '👨' },
    { key: 'mom' as const, label: t('goalsAskParentsMom'), emoji: '👩' },
    { key: 'grandma' as const, label: t('goalsAskParentsGrandma'), emoji: '👵' },
  ];

  // ===== GOAL DETAIL VIEW =====
  if (selectedGoal) {
    const progress = selectedGoal.currentAmount / selectedGoal.targetAmount;
    const isCompleted = progress >= 1;
    const daysLeft = getDaysLeft(selectedGoal.deadline);
    const goalInterest = Math.round(selectedGoal.currentAmount * 0.15 / 12);

    return (
      <div className="min-h-screen bg-background pb-28">
        {/* Header */}
        <div className="px-5 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setSelectedGoalId(null)}
              className="p-2 rounded-2xl bg-secondary">
              <ArrowLeft size={20} />
            </motion.button>
            <h1 className="text-lg font-black flex-1 text-center">{selectedGoal.emoji} {selectedGoal.name}</h1>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleStartEdit(selectedGoal.id)}
              className="p-2 rounded-2xl bg-secondary">
              <Edit2 size={16} />
            </motion.button>
          </div>

          {/* Account info card — reference style */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-1">
              {selectedGoal.reason || selectedGoal.name}
            </p>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-black">{formatSum(selectedGoal.currentAmount)} <span className="text-lg">{t('currencySuffix')}</span></p>
                {goalInterest > 0 && (
                  <p className="text-sm text-success font-bold mt-1">+{formatSum(goalInterest)} {t('currencySuffix')} {t('goalsInterestEarned').toLowerCase()}</p>
                )}
              </div>
              <div className="bg-secondary rounded-2xl px-3 py-1.5">
                <span className="text-sm font-bold">15%</span>
              </div>
            </div>
            {daysLeft !== null && (
              <p className="text-xs text-primary font-bold mt-2">⏰ {daysLeft} {t('goalsDaysLeft')}</p>
            )}
          </div>

          {/* Progress */}
          <JourneyProgress progress={progress} emoji={selectedGoal.emoji} currentAmount={selectedGoal.currentAmount} targetAmount={selectedGoal.targetAmount} />

          {isCompleted && (
            <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-success font-bold text-sm mt-2 text-center mb-4">
              {t('goalsCompleted')}
            </motion.p>
          )}

          {/* Action buttons — 2x2 grid like reference */}
          <div className="grid grid-cols-2 gap-3 mt-6">
            <motion.button whileTap={{ scale: 0.97 }}
              onClick={() => { setActiveGoalId(selectedGoal.id); setManualAmount(''); }}
              className="bg-card rounded-3xl p-5 shadow-card flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center">
                <Plus size={20} className="text-foreground" />
              </div>
              <div>
                <p className="font-bold text-sm">{t('goalsTopUp')}</p>
                <p className="text-[11px] text-muted-foreground">с карты</p>
              </div>
            </motion.button>

            <motion.button whileTap={{ scale: 0.97 }}
              onClick={() => { setShowWithdraw(selectedGoal.id); setWithdrawAmount(''); }}
              className="bg-card rounded-3xl p-5 shadow-card flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center">
                <ArrowDownCircle size={20} className="text-foreground" />
              </div>
              <div>
                <p className="font-bold text-sm">{t('goalsWithdraw')}</p>
                <p className="text-[11px] text-muted-foreground">на карту</p>
              </div>
            </motion.button>

            <motion.button whileTap={{ scale: 0.97 }}
              onClick={() => handleOpenAskParents(selectedGoal.id)}
              className="bg-card rounded-3xl p-5 shadow-card flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-foreground/20 flex items-center justify-center shrink-0">
                <Heart size={20} className="text-foreground" />
              </div>
              <p className="font-bold text-sm">{t('goalsAskParents')}</p>
            </motion.button>

            <motion.button whileTap={{ scale: 0.97 }}
              onClick={() => setCloseGoalId(selectedGoal.id)}
              className="bg-card rounded-3xl p-5 shadow-card flex flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-destructive/30 flex items-center justify-center shrink-0">
                <Trash2 size={20} className="text-destructive" />
              </div>
              <p className="font-bold text-sm text-destructive">{t('goalsCloseGoal')}</p>
            </motion.button>
          </div>
        </div>

        {/* All modals (top-up, withdraw, ask parents, close confirm, notification) */}
        {/* Top-up modal */}
        <AnimatePresence>
          {activeGoalId && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/40 flex items-center justify-center p-6" onClick={() => setActiveGoalId(null)}>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-black">{t('goalsTopUp')}</h2>
                  <button onClick={() => setActiveGoalId(null)} className="p-2 rounded-2xl bg-secondary"><X size={16} /></button>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{selectedGoal.name}</p>
                <p className="text-xs text-muted-foreground mb-4">{t('homeCardBalance')}: {formatSum(balance)} {t('currencySuffix')}</p>
                <input value={manualAmount} onChange={e => setManualAmount(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="0" inputMode="numeric"
                  className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl" />
                <motion.button whileTap={{ scale: 0.97 }} onClick={() => handleContribute(activeGoalId)}
                  disabled={!manualAmount || Number(manualAmount) <= 0}
                  className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button disabled:opacity-40">
                  {t('goalsConfirm')}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Withdraw modal */}
        <AnimatePresence>
          {showWithdraw && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/40 flex items-center justify-center p-6" onClick={() => setShowWithdraw(null)}>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-black">{t('goalsWithdraw')}</h2>
                  <button onClick={() => setShowWithdraw(null)} className="p-2 rounded-2xl bg-secondary"><X size={16} /></button>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {selectedGoal.name} — {formatSum(selectedGoal.currentAmount)} {t('currencySuffix')}
                </p>
                <input value={withdrawAmount} onChange={e => setWithdrawAmount(e.target.value.replace(/\D/g, ''))}
                  placeholder="0" inputMode="numeric"
                  className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl" />
                <motion.button whileTap={{ scale: 0.97 }} onClick={() => handleWithdraw(showWithdraw)}
                  disabled={!withdrawAmount || Number(withdrawAmount) <= 0}
                  className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button disabled:opacity-40">
                  {t('goalsWithdraw')}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ask parents modal */}
        <AnimatePresence>
          {showAskParents && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-foreground/40 flex items-center justify-center p-6" onClick={() => setShowAskParents(null)}>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-black">{t('goalsAskParentsAdd')}</h2>
                  <button onClick={() => setShowAskParents(null)} className="p-2 rounded-2xl bg-secondary"><X size={16} /></button>
                </div>
                <p className="text-sm font-bold text-muted-foreground mb-2">{t('goalsAskParentsWho')}</p>
                <div className="flex gap-2 mb-4">
                  {parentOptions.map(p => (
                    <button key={p.key} onClick={() => setAskParentWho(p.key)}
                      className={`flex-1 py-3 rounded-2xl flex flex-col items-center gap-1 text-xs font-bold transition-all ${
                        askParentWho === p.key ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-muted-foreground'
                      }`}>
                      <span className="text-xl">{p.emoji}</span>
                      {p.label}
                    </button>
                  ))}
                </div>
                <p className="text-sm font-bold text-muted-foreground mb-1">{t('goalsAskParentsAmount')}</p>
                <input value={askParentAmount} onChange={e => setAskParentAmount(e.target.value.replace(/\D/g, ''))}
                  placeholder="0" inputMode="numeric"
                  className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl" />
                <p className="text-sm font-bold text-muted-foreground mb-1">{t('goalsAskParentsMessage')}</p>
                <textarea value={askParentMessage} onChange={e => setAskParentMessage(e.target.value.slice(0, 120))}
                  placeholder={t('goalsAskParentsMessagePlaceholder')} rows={3}
                  className="w-full bg-secondary text-foreground font-semibold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary resize-none text-sm" />
                <motion.button whileTap={{ scale: 0.97 }} onClick={handleSendParentRequest}
                  disabled={!askParentAmount || Number(askParentAmount) <= 0}
                  className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button disabled:opacity-40">
                  {t('goalsAskParentsSend')}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Close goal confirmation */}
        <AnimatePresence>
          {closeGoalId && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-foreground/50 flex items-center justify-center p-6" onClick={() => setCloseGoalId(null)}>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm text-center">
                <div className="text-5xl mb-4">⚠️</div>
                <h2 className="text-xl font-black mb-2">{t('goalsCloseConfirmTitle')}</h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{t('goalsCloseConfirmDesc')}</p>
                <div className="flex gap-3">
                  <motion.button whileTap={{ scale: 0.97 }} onClick={() => setCloseGoalId(null)}
                    className="flex-1 bg-secondary text-foreground font-bold py-4 rounded-2xl">
                    {t('goalsCloseConfirmNo')}
                  </motion.button>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleCloseGoal}
                    className="flex-1 bg-destructive text-destructive-foreground font-bold py-4 rounded-2xl">
                    {t('goalsCloseConfirmYes')}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <OperationNotification
          open={notif.open} title={notif.title} emoji={notif.emoji}
          amount={notif.amount} type={notif.type} description={notif.description}
          onDetails onClose={() => setNotif(n => ({ ...n, open: false }))}
        />
        <BottomNav />
      </div>
    );
  }

  // ===== GOALS LIST VIEW =====
  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-4">{t('goalsTitle')}</h1>

        {/* Financial advice banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-savings/15 border border-savings/30 rounded-3xl p-4 flex items-start gap-3 mb-4">
          <Sparkles className="text-savings shrink-0 mt-0.5" size={18} />
          <p className="text-xs font-semibold text-foreground/80 leading-relaxed">{t('goalsFinAdvice')}</p>
        </motion.div>

        {/* Big action buttons — below banner */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <motion.button whileTap={{ scale: 0.97 }} onClick={() => setShowCalc(true)}
            className="bg-card rounded-3xl p-5 shadow-card flex flex-col items-start gap-3">
            <div className="w-10 h-10 bg-savings/20 rounded-full flex items-center justify-center">
              <Calculator size={20} className="text-savings-foreground" />
            </div>
            <p className="font-bold text-sm text-left">{t('goalsCalcButton')}</p>
          </motion.button>
          <motion.button whileTap={{ scale: 0.97 }}
            onClick={() => { setEditGoalId(null); setNewGoal({ name: '', targetAmount: '', reason: '', emoji: '🎯', deadline: '' }); setShowCreate(true); }}
            className="bg-card rounded-3xl p-5 shadow-card flex flex-col items-start gap-3">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shadow-button">
              <Plus size={20} className="text-primary-foreground" />
            </div>
            <p className="font-bold text-sm text-left">{t('goalsNewButton')}</p>
          </motion.button>
        </div>

        {/* Summary */}
        <div className="bg-card rounded-3xl p-4 shadow-card mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-semibold">{t('goalsTotalBalance')}</p>
            <p className="text-xl font-black text-primary">{formatSum(totalSavings)} {t('currencySuffix')}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground font-semibold">{t('goalsInterestEarned')}</p>
            <p className="text-sm font-bold text-success">+{formatSum(interestEarned)} {t('currencySuffix')}</p>
          </div>
        </div>

        {/* Goals list — simplified, tap to open detail */}
        <div className="space-y-3">
          {goals.map((goal, i) => {
            const progress = goal.currentAmount / goal.targetAmount;
            const isCompleted = progress >= 1;
            const daysLeft = getDaysLeft(goal.deadline);

            return (
              <motion.button key={goal.id} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }} whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedGoalId(goal.id)}
                className="bg-card rounded-3xl p-4 shadow-card w-full text-left flex items-center gap-4">
                <div className="text-3xl">{goal.emoji}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm truncate">{goal.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {formatSum(goal.currentAmount)} / {formatSum(goal.targetAmount)} {t('currencySuffix')}
                  </p>
                  {/* Mini progress bar */}
                  <div className="relative h-2 bg-secondary rounded-full overflow-hidden mt-1.5">
                    <motion.div
                      className="absolute inset-y-0 left-0 gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(Math.round(progress * 100), 100)}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  {daysLeft !== null && daysLeft > 0 && (
                    <p className="text-[11px] text-primary font-bold mt-1">⏰ {daysLeft} {t('goalsDaysLeft')}</p>
                  )}
                </div>
                <ChevronRight size={18} className="text-muted-foreground shrink-0" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Calculator modal */}
      <AnimatePresence>
        {showCalc && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 flex items-end" onClick={() => setShowCalc(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black">{t('goalsCalcButton')}</h2>
                <button onClick={() => setShowCalc(false)} className="p-2 rounded-2xl bg-secondary"><X size={18} /></button>
              </div>
              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsCalcHowMuch')}</label>
              <input value={calcAmount} onChange={e => setCalcAmount(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="10 000" inputMode="numeric"
                className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl" />
              <label className="text-sm font-bold text-muted-foreground mb-2 block">{t('goalsCalcFrequency')}</label>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {frequencies.map(f => (
                  <button key={f.key} onClick={() => setCalcFreq(f.key)}
                    className={`py-3 rounded-2xl text-xs font-bold ${calcFreq === f.key ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-muted-foreground'}`}>
                    {f.label}
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground text-center mb-4">{t('goalsCalcRate')}</p>
              {calcAmountNum > 0 && (
                <div className="space-y-3 mb-6">
                  {[{ label: t('goalsCalcResult1m'), value: calcResults.m1 }, { label: t('goalsCalcResult3m'), value: calcResults.m3 }, { label: t('goalsCalcResult1y'), value: calcResults.y1 }].map((r, i) => (
                    <div key={i} className="bg-secondary rounded-2xl p-3 flex justify-between items-center">
                      <p className="text-sm font-semibold">{r.label}</p>
                      <p className="font-black text-primary">{formatSum(r.value)} {t('currencySuffix')}</p>
                    </div>
                  ))}
                </div>
              )}
              <motion.button whileTap={{ scale: 0.97 }} onClick={() => { setShowCalc(false); setShowCreate(true); }}
                className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button">
                {t('goalsCalcOpenPiggy')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create/Edit goal modal */}
      <AnimatePresence>
        {showCreate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/40 z-[60] flex items-end" onClick={() => { setShowCreate(false); setEditGoalId(null); }}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black">{editGoalId ? t('goalsEdit') : t('goalsCreate')}</h2>
                <button onClick={() => { setShowCreate(false); setEditGoalId(null); }} className="p-2 rounded-2xl bg-secondary"><X size={18} /></button>
              </div>
              <div className="flex gap-2 flex-wrap mb-5">
                {goalEmojis.map(e => (
                  <button key={e} onClick={() => setNewGoal(g => ({ ...g, emoji: e }))}
                    className={`w-11 h-11 rounded-2xl text-xl flex items-center justify-center ${newGoal.emoji === e ? 'bg-primary/15 ring-2 ring-primary' : 'bg-secondary'}`}>
                    {e}
                  </button>
                ))}
              </div>
              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsName')}</label>
              <input value={newGoal.name} onChange={e => setNewGoal(g => ({ ...g, name: e.target.value.slice(0, 30) }))}
                placeholder={t('goalsNamePlaceholder')}
                className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary" />
              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsAmount')}</label>
              <input value={newGoal.targetAmount} onChange={e => setNewGoal(g => ({ ...g, targetAmount: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                placeholder={t('goalsAmountPlaceholder')} inputMode="numeric"
                className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary" />
              <label className="text-sm font-bold text-muted-foreground mb-1 block">{t('goalsReason')}</label>
              <input value={newGoal.reason} onChange={e => setNewGoal(g => ({ ...g, reason: e.target.value.slice(0, 60) }))}
                placeholder={t('goalsReasonPlaceholder')}
                className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary" />
              <label className="text-sm font-bold text-muted-foreground mb-1 flex items-center gap-2">
                <Calendar size={14} /> {t('goalsDeadline')}
              </label>
              <input type="date" value={newGoal.deadline} onChange={e => setNewGoal(g => ({ ...g, deadline: e.target.value }))}
                className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-primary" />
              <motion.button whileTap={{ scale: 0.97 }} onClick={handleCreate}
                className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button">
                {editGoalId ? t('goalsUpdate') : t('goalsSave')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <OperationNotification
        open={notif.open} title={notif.title} emoji={notif.emoji}
        amount={notif.amount} type={notif.type} description={notif.description}
        onDetails onClose={() => setNotif(n => ({ ...n, open: false }))}
      />
      <BottomNav />
    </div>
  );
};

export default Goals;
