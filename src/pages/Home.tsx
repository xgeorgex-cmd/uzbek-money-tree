import { useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { avatars, mockStories, quizQuestions, txDesc, txSource, goalName } from '@/data/mockData';
import { ChevronRight, Sparkles, X, Send, CreditCard, Settings as SettingsIcon, Shield, RefreshCw, AlertTriangle, Camera, Check, ThumbsUp, ThumbsDown, BookUser, Search } from 'lucide-react';
import BottomNav from '@/components/BottomNav';
import OperationNotification from '@/components/OperationNotification';
import AnimatedBalance from '@/components/AnimatedBalance';
import SpendingDonut from '@/components/SpendingDonut';
import ProfileEditDialog from '@/components/ProfileEditDialog';
import { toast } from 'sonner';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const Home = () => {
  const { t } = useLanguage();
  const { userName, avatarId, customPhoto, balance, transactions, goals, viewedStories, markStoryViewed, updateAvatar, quizScore, lastQuizScore, setQuizScore, addQuizReward, likedStories, dislikedStories, likeStory, dislikeStory, cardNumber, transferMoney, topUpFromParent } = useApp();
  const navigate = useNavigate();
  const avatar = avatars.find(a => a.id === avatarId);
  const lastTxs = transactions.slice(0, 3);
  const last4 = cardNumber ? cardNumber.slice(-4) : '••••';

  const totalSavings = goals.reduce((s, g) => s + g.currentAmount, 0);
  const closestGoal = [...goals].filter(g => g.currentAmount < g.targetAmount)
    .sort((a, b) => (b.currentAmount / b.targetAmount) - (a.currentAmount / a.targetAmount))[0];
  const closestProgress = closestGoal ? closestGoal.currentAmount / closestGoal.targetAmount : 0;

  const [activeStory, setActiveStory] = useState<string | null>(null);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showRequestMoney, setShowRequestMoney] = useState(false);
  const [showCardSettings, setShowCardSettings] = useState(false);
  const [cardSettingsAction, setCardSettingsAction] = useState<string | null>(null);
  const [transferStep, setTransferStep] = useState<'form' | 'success'>('form');
  const [transferTo, setTransferTo] = useState<'self' | 'other'>('self');
  const [transferRecipient, setTransferRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [contactSearch, setContactSearch] = useState('');
  const [transferGoalId, setTransferGoalId] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState<'intro' | 'question' | 'result' | 'finish'>('intro');
  const [quizQIndex, setQuizQIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizCorrectCount, setQuizCorrectCount] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newCustomPhoto, setNewCustomPhoto] = useState<string | null>(null);
  const [notif, setNotif] = useState<{ open: boolean; title: string; emoji: string; amount?: number; type?: string; description?: string }>({
    open: false, title: '', emoji: ''
  });
  const [pullY, setPullY] = useState(0);
  const [isPulling, setIsPulling] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const touchStartY = useRef(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (scrollContainerRef.current && scrollContainerRef.current.scrollTop === 0) {
      touchStartY.current = e.touches[0].clientY;
      setIsPulling(true);
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isPulling) return;
    const diff = e.touches[0].clientY - touchStartY.current;
    if (diff > 0) {
      setPullY(Math.min(diff * 0.4, 80));
    }
  }, [isPulling]);

  const handleTouchEnd = useCallback(() => {
    if (pullY > 50) {
      setIsRefreshing(true);
      setTimeout(() => {
        setIsRefreshing(false);
        setPullY(0);
        setIsPulling(false);
      }, 1000);
    } else {
      setPullY(0);
      setIsPulling(false);
    }
  }, [pullY]);

  const currentStory = mockStories.find(s => s.id === activeStory);

  const sortedStories = [...mockStories].sort((a, b) => {
    const aViewed = viewedStories.includes(a.id);
    const bViewed = viewedStories.includes(b.id);
    if (aViewed && !bViewed) return 1;
    if (!aViewed && bViewed) return -1;
    return 0;
  });

  const handleStoryClick = (storyId: string) => {
    const story = mockStories.find(s => s.id === storyId);
    if (story?.type === 'quiz') {
      setShowQuiz(true);
      setQuizStep('intro');
      setQuizQIndex(0);
      setQuizAnswer(null);
      setQuizCorrectCount(0);
    } else {
      setActiveStory(storyId);
    }
    markStoryViewed(storyId);
  };

  const handleCloseStory = () => setActiveStory(null);

  const handleQuizAnswer = (idx: number) => {
    setQuizAnswer(idx);
    if (idx === quizQuestions[quizQIndex].correctIndex) {
      setQuizCorrectCount(c => c + 1);
    }
    setQuizStep('result');
  };

  const handleQuizNext = () => {
    if (quizQIndex < quizQuestions.length - 1) {
      setQuizQIndex(i => i + 1);
      setQuizAnswer(null);
      setQuizStep('question');
    } else {
      const reward = quizCorrectCount * 10;
      setQuizScore(quizCorrectCount);
      if (reward > 0) {
        addQuizReward(reward);
      }
      setQuizStep('finish');
    }
  };

  const handleAvatarPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const photo = ev.target?.result as string;
        setNewCustomPhoto(photo);
        updateAvatar('custom', photo);
        setShowAvatarPicker(false);
        toast.success(t('homeChangeAvatar') + ' ✅');
      };
      reader.readAsDataURL(file);
    }
  };

  const showNotif = (title: string, emoji: string, amount?: number, type?: string, description?: string) => {
    setNotif({ open: true, title, emoji, amount, type, description });
  };

  const handleTransfer = () => {
    const amount = Number(transferAmount);
    if (amount <= 0) return;
    if (amount > balance) return;
    if (transferTo === 'self' && transferGoalId) {
      transferMoney(amount, '', transferGoalId);
      const goalObj = goals.find(g => g.id === transferGoalId);
      setTransferStep('success');
      showNotif(t('goalsConfirm'), '✅', -amount, t('goalsTopUp'), goalObj ? goalName(goalObj, t) : '');
    } else if (transferTo === 'other' && transferRecipient) {
      transferMoney(amount, transferRecipient);
      setTransferStep('success');
      showNotif(t('transferSuccess'), '✅', -amount, t('homeTransferMoney'));
    }
  };

  const handleRequestMoney = () => {
    setRequestSent(true);
    showNotif(t('requestMoneySent'), '💌');
    // Simulate parent top-up after 3 seconds
    setTimeout(() => {
      topUpFromParent(50000);
      showNotif(t('parentTopUpReceived'), '🎉', 50000, t('homeAskParentTopUp'));
    }, 3000);
    setTimeout(() => { setRequestSent(false); setShowRequestMoney(false); }, 2000);
  };

  const avatarDisplay = customPhoto ? (
    <img src={customPhoto} alt="avatar" className="w-full h-full rounded-2xl object-cover" />
  ) : (
    <span className="text-2xl">{avatar?.emoji || '🦊'}</span>
  );

  return (
    <div className="min-h-screen bg-background pb-28" ref={scrollContainerRef}
      onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {/* Pull to refresh indicator */}
      <AnimatePresence>
        {(pullY > 10 || isRefreshing) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, height: isRefreshing ? 50 : pullY }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center justify-center overflow-hidden"
          >
            <motion.span
              animate={isRefreshing ? { rotate: 360 } : { rotate: pullY * 3 }}
              transition={isRefreshing ? { repeat: Infinity, duration: 0.8, ease: 'linear' } : { duration: 0 }}
              className="text-2xl"
            >
              🔄
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header with themed gradient */}
      <div className="relative overflow-hidden px-6 pt-10 pb-5 rounded-b-[2rem]" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-2 right-8 w-16 h-16 rounded-full bg-primary-foreground/5 blur-xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <motion.button whileTap={{ scale: 0.9, rotate: 10 }} onClick={() => setShowAvatarPicker(true)}
              className="w-11 h-11 bg-primary-foreground/15 backdrop-blur-sm rounded-2xl flex items-center justify-center overflow-hidden border border-primary-foreground/10">
              {avatarDisplay}
            </motion.button>
            <div className="flex-1">
              <p className="text-primary-foreground/60 text-xs font-bold">{t('homeGreeting')}, {userName || t('defaultUserName')}!</p>
            </div>
          </div>

          <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={() => setShowCardDetail(true)}
            className="flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform">
            <div>
              <p className="text-primary-foreground text-3xl font-black">
                <AnimatedBalance value={balance} /> <span className="text-sm font-bold">{t('currencySuffix')}</span>
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-primary-foreground/10 rounded-xl px-2.5 py-1.5">
              <div className="w-5 h-3.5 rounded-sm bg-gradient-to-r from-blue-400 to-blue-600" />
              <span className="text-primary-foreground/70 text-[10px] font-bold">•• {last4}</span>
              <ChevronRight size={14} className="text-primary-foreground/50" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-5 mt-5 space-y-4">
        {/* Stories ribbon */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-bold text-muted-foreground">{t('homeStories')}</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {sortedStories.map((story, i) => {
              const isViewed = viewedStories.includes(story.id);
              return (
                <motion.button
                  key={story.id}
                  whileTap={{ scale: 0.93 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => handleStoryClick(story.id)}
                  className={`shrink-0 w-[6.5rem] h-[7.5rem] rounded-2xl flex flex-col items-end justify-end overflow-hidden border-2 transition-all relative ${
                    isViewed ? 'border-border/50 opacity-50' : 'border-primary/30 shadow-sm'
                  }`}
                >
                  {story.image && (
                    <img src={story.image} alt={t(story.titleKey as any)} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                  <div className="relative z-10 w-full bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-5">
                    <span className="text-[10px] font-bold text-white leading-tight line-clamp-2">{t(story.titleKey as any)}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Goal progress — before transactions */}
        {closestGoal && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-card rounded-3xl p-5 shadow-card">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-muted-foreground font-semibold">{t('homeTotalSavings')}</p>
              <p className="text-sm font-black text-primary">{formatSum(totalSavings)} {t('currencySuffix')}</p>
            </div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{closestGoal.emoji}</span>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">{t('homeClosestGoal')}</p>
                  <p className="text-sm font-bold">{goalName(closestGoal, t)}</p>
                </div>
              </div>
            </div>
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-3">
              <motion.div className="h-full gradient-primary rounded-full" initial={{ width: 0 }}
                animate={{ width: `${closestProgress * 100}%` }} transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }} />
            </div>
            <p className="text-xs text-muted-foreground">
              {t('homeRemaining')}: <span className="font-bold text-foreground">{formatSum(closestGoal.targetAmount - closestGoal.currentAmount)} {t('currencySuffix')}</span>
            </p>
            <motion.button whileTap={{ scale: 0.97 }} onClick={() => navigate('/goals')}
              className="w-full gradient-warm text-accent-foreground font-bold py-4 rounded-2xl mt-4 shadow-button text-sm">
              {t('homeGoToDream')}
            </motion.button>
          </motion.div>
        )}

        {/* Last 3 transactions */}
        <div>
          <p className="text-xs font-bold text-muted-foreground mb-2">{t('homeLastTransactions')}</p>
          {lastTxs.map((tx, i) => (
            <motion.div key={tx.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.05 }}
              onClick={() => navigate('/history')}
              className="bg-card rounded-3xl p-4 shadow-card flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform mb-2">
              <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-lg">{tx.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{txDesc(tx, t)}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <p className={`font-black text-sm ${tx.type === 'income' ? 'text-success' : tx.type === 'savings' ? 'text-savings' : 'text-destructive'}`}>
                {tx.type === 'income' ? '+' : ''}{formatSum(tx.amount)} {t('currencySuffix')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile edit dialog */}
      <ProfileEditDialog open={showAvatarPicker} onClose={() => setShowAvatarPicker(false)} />

      {/* Story fullscreen modal with like/dislike */}
      <AnimatePresence>
        {activeStory && currentStory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/60 flex items-center justify-center p-6" onClick={handleCloseStory}>
            <motion.div initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-card">
              <div className="flex justify-end mb-2">
                <button onClick={handleCloseStory} className="p-2 rounded-full bg-secondary"><X size={16} /></button>
              </div>
              <div className="text-6xl text-center mb-4">{currentStory.emoji}</div>
              <h2 className="text-xl font-black text-center mb-3">{t(currentStory.titleKey as any)}</h2>
              <p className="text-muted-foreground text-center leading-relaxed mb-6">{t(currentStory.contentKey as any)}</p>
              {/* Like / Dislike */}
              <div className="flex items-center justify-center gap-6">
                <motion.button whileTap={{ scale: 0.85 }} onClick={() => { likeStory(currentStory.id); toast.success('👍'); }}
                  className={`p-4 rounded-2xl flex items-center gap-2 font-bold text-sm ${
                    likedStories.includes(currentStory.id) ? 'bg-success/20 text-success' : 'bg-secondary text-muted-foreground'
                  }`}>
                  <ThumbsUp size={20} /> {likedStories.includes(currentStory.id) ? '✓' : ''}
                </motion.button>
                <motion.button whileTap={{ scale: 0.85 }} onClick={() => { dislikeStory(currentStory.id); toast.success('👎'); }}
                  className={`p-4 rounded-2xl flex items-center gap-2 font-bold text-sm ${
                    dislikedStories.includes(currentStory.id) ? 'bg-destructive/20 text-destructive' : 'bg-secondary text-muted-foreground'
                  }`}>
                  <ThumbsDown size={20} /> {dislikedStories.includes(currentStory.id) ? '✓' : ''}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quiz modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/60 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-card max-h-[90vh] overflow-y-auto">
              <div className="flex justify-end mb-2">
                <button onClick={() => setShowQuiz(false)} className="p-2 rounded-full bg-secondary"><X size={16} /></button>
              </div>

              {quizStep === 'intro' && (
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <h2 className="text-xl font-black mb-2">{t('quizTitle')}</h2>
                  <p className="text-muted-foreground mb-2">{t('quizIntro')}</p>
                  <p className="text-primary font-bold mb-6">{t('quizReward')}</p>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={() => setQuizStep('question')}
                    className="w-full gradient-primary text-primary-foreground font-bold py-5 rounded-3xl shadow-button">
                    {t('quizStart')}
                  </motion.button>
                </div>
              )}

              {quizStep === 'question' && (
                <div>
                  <p className="text-xs text-muted-foreground font-bold mb-2">{quizQIndex + 1} / {quizQuestions.length}</p>
                  <h3 className="text-lg font-black mb-4">{t(quizQuestions[quizQIndex].questionKey as any)}</h3>
                  <div className="space-y-2">
                    {quizQuestions[quizQIndex].optionKeys.map((optKey, i) => (
                      <motion.button key={i} whileTap={{ scale: 0.97 }} onClick={() => handleQuizAnswer(i)}
                        className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl text-left text-sm">
                        {t(optKey as any)}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {quizStep === 'result' && (
                <div className="text-center">
                  <div className="text-5xl mb-3">
                    {quizAnswer === quizQuestions[quizQIndex].correctIndex ? '🎉' : '🤔'}
                  </div>
                  <h3 className="text-lg font-black mb-2">
                    {quizAnswer === quizQuestions[quizQIndex].correctIndex ? t('quizCorrect') : t('quizWrong')}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">{t(quizQuestions[quizQIndex].explanationKey as any)}</p>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleQuizNext}
                    className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button">
                    {t('quizNext')}
                  </motion.button>
                </div>
              )}

              {quizStep === 'finish' && (
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <h2 className="text-xl font-black mb-2">{t('quizFinishTitle')}</h2>
                  <p className="text-3xl font-black text-primary mb-2">{quizCorrectCount * 10} {t('currencySuffix')}</p>
                  <p className="text-success font-bold text-sm mb-2">{t('quizRewardCredited')}</p>
                  <p className="text-muted-foreground text-sm mb-1">{t('quizFinishDesc')}</p>
                  {lastQuizScore > 0 && (
                    <p className="text-xs text-muted-foreground mb-2">{t('quizLastTime')}: {lastQuizScore * 10} {t('currencySuffix')}</p>
                  )}
                  <p className="text-xs text-muted-foreground mb-6">{t('quizComeBack')}</p>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={() => setShowQuiz(false)}
                    className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button">
                    {t('quizDone')}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card detail modal */}
      <AnimatePresence>
        {showCardDetail && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 flex items-end" onClick={() => setShowCardDetail(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto">
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-black mb-6">{t('homeCardDetails')}</h2>
              <div className="gradient-primary rounded-3xl p-5 mb-6">
                <p className="text-primary-foreground/70 text-xs font-semibold mb-1">{t('homeCardBalance')}</p>
                <p className="text-primary-foreground text-3xl font-black mb-4">{formatSum(balance)} {t('currencySuffix')}</p>
                <p className="text-primary-foreground/60 text-sm font-bold tracking-widest">•••• •••• •••• {last4}</p>
              </div>
              <div className="space-y-3">
                <motion.button whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setShowCardDetail(false); setShowTransfer(true); setTransferStep('form');
                    const available = goals.filter(g => g.currentAmount < g.targetAmount);
                    if (available.length > 0) setTransferGoalId(available[0].id);
                  }}
                  className="w-full bg-secondary rounded-3xl p-5 flex items-center gap-3 font-bold text-sm">
                  <Send size={18} className="text-primary" /> {t('homeTransferMoney')}
                </motion.button>
                <motion.button whileTap={{ scale: 0.97 }}
                  onClick={() => { setShowCardDetail(false); setShowRequestMoney(true); setRequestSent(false); }}
                  className="w-full bg-secondary rounded-3xl p-5 flex items-center gap-3 font-bold text-sm">
                  <CreditCard size={18} className="text-success" /> {t('homeAskParentTopUp')}
                </motion.button>
                <motion.button whileTap={{ scale: 0.97 }}
                  onClick={() => { setShowCardDetail(false); setShowCardSettings(true); setCardSettingsAction(null); }}
                  className="w-full bg-secondary rounded-3xl p-5 flex items-center gap-3 font-bold text-sm">
                  <SettingsIcon size={18} className="text-muted-foreground" /> {t('homeCardSettings')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Transfer modal */}
      <AnimatePresence>
        {showTransfer && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 flex items-end" onClick={() => setShowTransfer(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[90vh] overflow-y-auto">
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />

              {transferStep === 'form' ? (
                <>
                  <h2 className="text-xl font-black mb-4">{t('transferTitle')}</h2>
                  <div className="gradient-primary rounded-2xl p-4 mb-4">
                    <p className="text-primary-foreground/70 text-xs font-semibold">{t('transferFrom')}</p>
                    <p className="text-primary-foreground font-black text-lg">•••• {last4} · {formatSum(balance)} {t('currencySuffix')}</p>
                  </div>
                  <div className="flex gap-2 mb-4 bg-secondary rounded-3xl p-1">
                    <button onClick={() => {
                      setTransferTo('self');
                      const available = goals.filter(g => g.currentAmount < g.targetAmount);
                      if (available.length > 0 && !transferGoalId) setTransferGoalId(available[0].id);
                    }}
                      className={`flex-1 py-3 rounded-2xl text-sm font-bold ${transferTo === 'self' ? 'gradient-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                      {t('transferToSelf')}
                    </button>
                    <button onClick={() => setTransferTo('other')}
                      className={`flex-1 py-3 rounded-2xl text-sm font-bold ${transferTo === 'other' ? 'gradient-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                      {t('transferToOther')}
                    </button>
                  </div>

                  {transferTo === 'self' ? (
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-bold text-muted-foreground">{t('transferChooseGoal')}</p>
                      {goals.filter(g => g.currentAmount < g.targetAmount).map(g => (
                        <button key={g.id} onClick={() => setTransferGoalId(g.id)}
                          className={`w-full bg-secondary rounded-2xl p-3 flex items-center gap-3 text-left ${transferGoalId === g.id ? 'ring-2 ring-primary' : ''}`}>
                          <span className="text-xl">{g.emoji}</span>
                          <div className="flex-1">
                            <p className="text-sm font-bold">{goalName(g, t)}</p>
                            <p className="text-xs text-muted-foreground">{formatSum(g.currentAmount)} / {formatSum(g.targetAmount)}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-4">
                      {/* Safety hint */}
                      <div className="bg-primary/10 rounded-2xl p-3 flex items-start gap-2 mb-4">
                        <Shield size={16} className="text-primary shrink-0 mt-0.5" />
                        <p className="text-xs font-semibold text-foreground/80">{t('transferContactHint')}</p>
                      </div>

                      {transferRecipient ? (
                        /* Show selected contact */
                        <div className="bg-primary/10 rounded-2xl p-4 flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-xl">
                            {[
                              { name: t('contactDad'), emoji: '👨' }, { name: t('contactMom'), emoji: '👩' },
                              { name: t('contactGrandma'), emoji: '👵' }, { name: t('contactGrandpa'), emoji: '👴' },
                              { name: t('contactBrother'), emoji: '👦' }, { name: t('contactSister'), emoji: '👧' },
                              { name: 'Aziz', emoji: '👦' }, { name: 'Malika', emoji: '👧' },
                              { name: 'Jasur', emoji: '👦' }, { name: 'Nilufar', emoji: '👧' },
                              { name: 'Bro 😎', emoji: '🤙' }, { name: 'Kesha', emoji: '🎮' },
                            ].find(c => c.name === transferRecipient)?.emoji || '👤'}
                          </div>
                          <p className="text-sm font-bold flex-1">{transferRecipient}</p>
                          <button onClick={() => setTransferRecipient('')} className="p-1.5 rounded-full bg-secondary">
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <p className="text-sm font-bold text-muted-foreground mb-2">{t('transferSelectContact')}</p>
                          {/* Search */}
                          <div className="relative mb-3">
                            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                            <input value={contactSearch} onChange={e => setContactSearch(e.target.value)}
                              placeholder="🔍"
                              className="w-full bg-secondary text-foreground font-semibold pl-10 pr-4 py-3 rounded-2xl outline-none focus:ring-2 focus:ring-primary text-sm" />
                          </div>
                          {/* Contact list */}
                          <div className="space-y-2 max-h-48 overflow-y-auto">
                            {[
                              { name: t('contactDad'), emoji: '👨', phone: '+998 90 ••• •• 12' },
                              { name: t('contactMom'), emoji: '👩', phone: '+998 91 ••• •• 34' },
                              { name: t('contactGrandma'), emoji: '👵', phone: '+998 90 ••• •• 56' },
                              { name: t('contactGrandpa'), emoji: '👴', phone: '+998 93 ••• •• 78' },
                              { name: t('contactBrother'), emoji: '👦', phone: '+998 94 ••• •• 90' },
                              { name: t('contactSister'), emoji: '👧', phone: '+998 95 ••• •• 11' },
                              { name: 'Aziz', emoji: '👦', phone: '+998 97 ••• •• 22' },
                              { name: 'Malika', emoji: '👧', phone: '+998 90 ••• •• 33' },
                              { name: 'Jasur', emoji: '👦', phone: '+998 91 ••• •• 44' },
                              { name: 'Nilufar', emoji: '👧', phone: '+998 93 ••• •• 55' },
                              { name: 'Bro 😎', emoji: '🤙', phone: '+998 94 ••• •• 66' },
                              { name: 'Kesha', emoji: '🎮', phone: '+998 95 ••• •• 77' },
                            ].filter(c => !contactSearch || c.name.toLowerCase().includes(contactSearch.toLowerCase()))
                             .map(contact => (
                              <motion.button key={contact.name} whileTap={{ scale: 0.97 }}
                                onClick={() => setTransferRecipient(contact.name)}
                                className="w-full rounded-2xl p-3.5 flex items-center gap-3 text-left bg-secondary">
                                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-xl">
                                  {contact.emoji}
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-bold">{contact.name}</p>
                                  <p className="text-xs text-muted-foreground">{contact.phone}</p>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  <p className="text-sm font-bold text-muted-foreground mb-1">{t('transferAmount')}</p>
                  <input value={transferAmount} onChange={e => setTransferAmount(e.target.value.replace(/\D/g, ''))}
                    placeholder="0" inputMode="numeric"
                    className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl" />

                  {Number(transferAmount) > balance && Number(transferAmount) > 0 && (
                    <p className="text-xs text-destructive font-bold text-center mb-2">{t('transferExceedsBalance')}</p>
                  )}

                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleTransfer}
                    disabled={!transferAmount || Number(transferAmount) <= 0 || Number(transferAmount) > balance || (transferTo === 'other' && !transferRecipient)}
                    className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button disabled:opacity-40">
                    {t('transferSend')}
                  </motion.button>
                  {transferTo === 'other' && !transferRecipient && (
                    <p className="text-xs text-destructive font-bold text-center mt-2">{t('transferContactOnly')}</p>
                  )}
                </>
              ) : (
                <div className="text-center py-8">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
                    <Check size={64} className="text-success mx-auto mb-4" />
                  </motion.div>
                  <h2 className="text-xl font-black mb-2">{t('transferSuccess')}</h2>
                  <p className="text-muted-foreground mb-6">{t('transferSuccessDesc')}</p>
                  <motion.button whileTap={{ scale: 0.97 }} onClick={() => setShowTransfer(false)}
                    className="w-full gradient-primary text-primary-foreground font-bold py-5 rounded-3xl shadow-button">
                    {t('transferDone')}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request money modal */}
      <AnimatePresence>
        {showRequestMoney && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 flex items-center justify-center p-6" onClick={() => setShowRequestMoney(false)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm text-center">
              <div className="text-6xl mb-4">💌</div>
              <h2 className="text-xl font-black mb-2">{t('requestMoneyTitle')}</h2>
              <p className="text-muted-foreground text-sm mb-6">{t('requestMoneyDesc')}</p>
              {requestSent ? (
                <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-success font-bold">{t('requestMoneySent')}</motion.p>
              ) : (
                <motion.button whileTap={{ scale: 0.97 }} onClick={handleRequestMoney}
                  className="w-full gradient-primary text-primary-foreground font-bold py-5 rounded-3xl shadow-button">
                  {t('requestMoneySend')}
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card settings modal */}
      <AnimatePresence>
        {showCardSettings && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/40 flex items-end" onClick={() => setShowCardSettings(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10">
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-black mb-4">{t('cardSettingsTitle')}</h2>

              {!cardSettingsAction ? (
                <div className="space-y-3">
                  <button onClick={() => setCardSettingsAction('details')}
                    className="w-full bg-secondary rounded-3xl p-5 flex items-center gap-3 font-bold text-sm text-left">
                    <CreditCard size={18} className="text-primary" /> {t('cardDetails')}
                  </button>
                  <button onClick={() => setCardSettingsAction('block')}
                    className="w-full bg-secondary rounded-3xl p-5 flex items-center gap-3 font-bold text-sm text-left">
                    <Shield size={18} className="text-accent" /> {t('cardBlock')}
                  </button>
                  <button onClick={() => setCardSettingsAction('reissue')}
                    className="w-full bg-secondary rounded-3xl p-5 flex items-center gap-3 font-bold text-sm text-left">
                    <RefreshCw size={18} className="text-primary" /> {t('cardReissue')}
                  </button>
                  <button onClick={() => setCardSettingsAction('fraud')}
                    className="w-full bg-destructive/10 rounded-3xl p-5 flex items-center gap-3 font-bold text-sm text-left text-destructive">
                    <AlertTriangle size={18} /> {t('cardFraud')}
                  </button>
                </div>
              ) : cardSettingsAction === 'details' ? (
                <div className="space-y-3">
                  <div className="bg-secondary rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground">{t('cardNumber')}</p>
                    <p className="font-black tracking-widest">•••• •••• •••• {last4}</p>
                  </div>
                  <div className="bg-secondary rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground">{t('cardExpiry')}</p>
                    <p className="font-black">08/28</p>
                  </div>
                  <button onClick={() => setCardSettingsAction(null)} className="w-full bg-secondary font-bold py-4 rounded-2xl mt-2">{t('cardCancel')}</button>
                </div>
              ) : cardSettingsAction === 'done' ? (
                <div className="text-center py-4">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-5xl mb-4">✅</motion.div>
                  <button onClick={() => setShowCardSettings(false)} className="w-full bg-secondary font-bold py-4 rounded-2xl">{t('transferDone')}</button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-5xl mb-4">{cardSettingsAction === 'block' ? '🔒' : cardSettingsAction === 'reissue' ? '💳' : '⚠️'}</div>
                  <p className="text-muted-foreground mb-6">
                    {cardSettingsAction === 'block' ? t('cardBlockConfirm') : cardSettingsAction === 'reissue' ? t('cardReissueConfirm') : t('cardFraudConfirm')}
                  </p>
                  <motion.button whileTap={{ scale: 0.97 }}
                    onClick={() => { setCardSettingsAction('done'); toast.success('✅'); }}
                    className={`w-full font-bold py-5 rounded-3xl shadow-button mb-3 ${cardSettingsAction === 'fraud' ? 'bg-destructive text-destructive-foreground' : 'gradient-primary text-primary-foreground'}`}>
                    {cardSettingsAction === 'block' ? t('cardBlock') : cardSettingsAction === 'reissue' ? t('cardReissue') : t('cardFraud')}
                  </motion.button>
                  <button onClick={() => setCardSettingsAction(null)} className="w-full bg-secondary font-bold py-4 rounded-2xl">{t('cardCancel')}</button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <OperationNotification
        open={notif.open}
        title={notif.title}
        emoji={notif.emoji}
        amount={notif.amount}
        type={notif.type}
        description={notif.description}
        onDetails
        onClose={() => setNotif(n => ({ ...n, open: false }))}
      />

      <BottomNav />
    </div>
  );
};

export default Home;
