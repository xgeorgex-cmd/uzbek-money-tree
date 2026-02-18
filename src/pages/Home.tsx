import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { avatars, mockStories, quizQuestions } from '@/data/mockData';
import { ChevronRight, Sparkles, X, Send, CreditCard, Settings as SettingsIcon, Shield, RefreshCw, AlertTriangle, Camera, Check } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const Home = () => {
  const { t } = useLanguage();
  const { userName, avatarId, customPhoto, balance, transactions, goals, viewedStories, markStoryViewed, updateAvatar, quizScore, lastQuizScore, setQuizScore } = useApp();
  const navigate = useNavigate();
  const avatar = avatars.find(a => a.id === avatarId);
  const lastTxs = transactions.slice(0, 3);

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
  const [transferGoalId, setTransferGoalId] = useState('');
  const [requestSent, setRequestSent] = useState(false);

  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState<'intro' | 'question' | 'result' | 'finish'>('intro');
  const [quizQIndex, setQuizQIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizCorrectCount, setQuizCorrectCount] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newCustomPhoto, setNewCustomPhoto] = useState<string | null>(null);

  const currentStory = mockStories.find(s => s.id === activeStory);

  // Sort stories: unviewed first, viewed last
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
      setQuizScore(quizCorrectCount);
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
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTransfer = () => {
    setTransferStep('success');
  };

  const handleRequestMoney = () => {
    setRequestSent(true);
    setTimeout(() => { setRequestSent(false); setShowRequestMoney(false); }, 2000);
  };

  const avatarDisplay = customPhoto ? (
    <img src={customPhoto} alt="avatar" className="w-full h-full rounded-2xl object-cover" />
  ) : (
    <span className="text-2xl">{avatar?.emoji || '🦊'}</span>
  );

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-primary px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-3 mb-6">
          <motion.button whileTap={{ scale: 0.9, rotate: 10 }} onClick={() => setShowAvatarPicker(true)}
            className="w-12 h-12 bg-card/20 rounded-2xl flex items-center justify-center overflow-hidden">
            {avatarDisplay}
          </motion.button>
          <div>
            <p className="text-primary-foreground/70 text-sm font-semibold">{t('homeGreeting')},</p>
            <h1 className="text-primary-foreground text-xl font-black">{userName || 'Друг'}!</h1>
          </div>
        </div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} onClick={() => setShowCardDetail(true)}
          className="bg-card/10 backdrop-blur-sm rounded-3xl p-5 border border-primary-foreground/10 cursor-pointer active:scale-[0.98] transition-transform">
          <p className="text-primary-foreground/70 text-sm font-semibold mb-1">{t('homeCardBalance')}</p>
          <motion.p className="text-primary-foreground text-4xl font-black" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
            {formatSum(balance)} <span className="text-lg font-bold">{t('currencySuffix')}</span>
          </motion.p>
          <p className="text-primary-foreground/50 text-xs font-semibold mt-1">{t('homeCardDetails')} →</p>
        </motion.div>
      </div>

      <div className="px-5 mt-6 space-y-4">
        {/* Stories ribbon - Instagram style */}
        <div>
          <p className="text-xs font-bold text-muted-foreground mb-2">{t('homeStories')}</p>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {sortedStories.map((story) => {
              const isViewed = viewedStories.includes(story.id);
              return (
                <motion.button key={story.id} whileTap={{ scale: 0.93 }} onClick={() => handleStoryClick(story.id)}
                  className={`shrink-0 w-[4.5rem] h-[5.5rem] rounded-3xl flex flex-col items-center justify-center gap-1 ${story.color} border-2 transition-all ${
                    isViewed ? 'border-border opacity-60 blur-[0.5px]' : 'border-primary/40'
                  }`}>
                  <span className="text-2xl">{story.emoji}</span>
                  <span className="text-[9px] font-bold text-foreground/70 leading-tight text-center px-1">{story.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Financial tip */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-savings/15 border border-savings/30 rounded-3xl p-4 flex items-start gap-3">
          <Sparkles className="text-savings shrink-0 mt-0.5" size={20} />
          <p className="text-sm font-semibold text-foreground/80 leading-relaxed">{t('storyFinTip')}</p>
        </motion.div>

        {/* Last 3 transactions */}
        <div>
          <p className="text-xs font-bold text-muted-foreground mb-2">{t('homeLastTransactions')}</p>
          {lastTxs.map((tx, i) => (
            <motion.div key={tx.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.05 }}
              onClick={() => navigate('/history')}
              className="bg-card rounded-3xl p-4 shadow-card flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform mb-2">
              <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center text-lg">{tx.icon}</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{tx.description}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <p className={`font-black text-sm ${tx.type === 'income' ? 'text-success' : tx.type === 'savings' ? 'text-savings' : 'text-destructive'}`}>
                {tx.type === 'income' ? '+' : ''}{formatSum(tx.amount)} {t('currencySuffix')}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Goal progress */}
        {closestGoal && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
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
                  <p className="text-sm font-bold">{closestGoal.name}</p>
                </div>
              </div>
            </div>
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-3">
              <motion.div className="h-full gradient-primary rounded-full" initial={{ width: 0 }}
                animate={{ width: `${closestProgress * 100}%` }} transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }} />
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
      </div>

      {/* Avatar picker modal */}
      <AnimatePresence>
        {showAvatarPicker && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end" onClick={() => setShowAvatarPicker(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10">
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-black mb-4">{t('homeChangeAvatar')}</h2>
              <div className="grid grid-cols-5 gap-3 mb-4">
                {avatars.map(av => (
                  <motion.button key={av.id} whileTap={{ scale: 0.9 }}
                    onClick={() => { updateAvatar(av.id, null); setShowAvatarPicker(false); }}
                    className={`w-14 h-14 text-2xl rounded-2xl flex items-center justify-center mx-auto ${
                      avatarId === av.id && !customPhoto ? 'bg-primary/15 ring-2 ring-primary' : 'bg-secondary'
                    }`}>
                    {av.emoji}
                  </motion.button>
                ))}
              </div>
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarPhotoUpload} />
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => fileInputRef.current?.click()}
                className="w-full bg-secondary text-foreground font-bold py-4 rounded-2xl flex items-center justify-center gap-2">
                <Camera size={18} className="text-primary" />
                {t('onboardUploadPhoto')}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story fullscreen modal */}
      <AnimatePresence>
        {activeStory && currentStory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-6" onClick={handleCloseStory}>
            <motion.div initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()} className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-card">
              <div className="flex justify-end mb-2">
                <button onClick={handleCloseStory} className="p-2 rounded-full bg-secondary"><X size={16} /></button>
              </div>
              <div className="text-6xl text-center mb-4">{currentStory.emoji}</div>
              <h2 className="text-xl font-black text-center mb-3">{currentStory.title}</h2>
              <p className="text-muted-foreground text-center leading-relaxed">{currentStory.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quiz modal */}
      <AnimatePresence>
        {showQuiz && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-4">
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
                  <h3 className="text-lg font-black mb-4">{quizQuestions[quizQIndex].question}</h3>
                  <div className="space-y-2">
                    {quizQuestions[quizQIndex].options.map((opt, i) => (
                      <motion.button key={i} whileTap={{ scale: 0.97 }} onClick={() => handleQuizAnswer(i)}
                        className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl text-left text-sm">
                        {opt}
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
                  <p className="text-muted-foreground text-sm mb-6">{quizQuestions[quizQIndex].explanation}</p>
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
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end" onClick={() => setShowCardDetail(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-28">
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-black mb-6">{t('homeCardDetails')}</h2>
              <div className="gradient-primary rounded-3xl p-5 mb-6">
                <p className="text-primary-foreground/70 text-xs font-semibold mb-1">{t('homeCardBalance')}</p>
                <p className="text-primary-foreground text-3xl font-black mb-4">{formatSum(balance)} {t('currencySuffix')}</p>
                <p className="text-primary-foreground/60 text-sm font-bold tracking-widest">•••• •••• •••• 9012</p>
              </div>
              <div className="space-y-3">
                <motion.button whileTap={{ scale: 0.97 }}
                  onClick={() => { setShowCardDetail(false); setShowTransfer(true); setTransferStep('form'); }}
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
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end" onClick={() => setShowTransfer(false)}>
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} className="bg-card w-full rounded-t-3xl p-6 pb-10 max-h-[90vh] overflow-y-auto">
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />

              {transferStep === 'form' ? (
                <>
                  <h2 className="text-xl font-black mb-4">{t('transferTitle')}</h2>
                  {/* From card */}
                  <div className="gradient-primary rounded-2xl p-4 mb-4">
                    <p className="text-primary-foreground/70 text-xs font-semibold">{t('transferFrom')}</p>
                    <p className="text-primary-foreground font-black text-lg">•••• 9012 · {formatSum(balance)} {t('currencySuffix')}</p>
                  </div>
                  {/* To whom */}
                  <div className="flex gap-2 mb-4 bg-secondary rounded-3xl p-1">
                    <button onClick={() => setTransferTo('self')}
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
                            <p className="text-sm font-bold">{g.name}</p>
                            <p className="text-xs text-muted-foreground">{formatSum(g.currentAmount)} / {formatSum(g.targetAmount)}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <p className="text-sm font-bold text-muted-foreground mb-1">{t('transferPhoneOrCard')}</p>
                      <input value={transferRecipient} onChange={e => setTransferRecipient(e.target.value)}
                        placeholder="+998... или 8600..."
                        className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                  )}

                  <p className="text-sm font-bold text-muted-foreground mb-1">{t('transferAmount')}</p>
                  <input value={transferAmount} onChange={e => setTransferAmount(e.target.value.replace(/\D/g, ''))}
                    placeholder="0" inputMode="numeric"
                    className="w-full bg-secondary text-foreground font-bold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary text-center text-xl" />

                  <motion.button whileTap={{ scale: 0.97 }} onClick={handleTransfer}
                    disabled={!transferAmount || Number(transferAmount) <= 0}
                    className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button disabled:opacity-40">
                    {t('transferSend')}
                  </motion.button>
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
            className="fixed inset-0 z-50 bg-foreground/40 flex items-center justify-center p-6" onClick={() => setShowRequestMoney(false)}>
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
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end" onClick={() => setShowCardSettings(false)}>
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
                    <p className="font-black tracking-widest">8600 1234 5678 9012</p>
                  </div>
                  <div className="bg-secondary rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground">{t('cardExpiry')}</p>
                    <p className="font-black">08/28</p>
                  </div>
                  <button onClick={() => setCardSettingsAction(null)} className="w-full bg-secondary font-bold py-4 rounded-2xl mt-2">{t('cardCancel')}</button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-5xl mb-4">{cardSettingsAction === 'block' ? '🔒' : cardSettingsAction === 'reissue' ? '💳' : '⚠️'}</div>
                  <p className="text-muted-foreground mb-6">
                    {cardSettingsAction === 'block' ? t('cardBlockConfirm') : cardSettingsAction === 'reissue' ? t('cardReissueConfirm') : t('cardFraudConfirm')}
                  </p>
                  <motion.button whileTap={{ scale: 0.97 }}
                    onClick={() => setCardSettingsAction('done')}
                    className={`w-full font-bold py-5 rounded-3xl shadow-button mb-3 ${cardSettingsAction === 'fraud' ? 'bg-destructive text-destructive-foreground' : 'gradient-primary text-primary-foreground'}`}>
                    {cardSettingsAction === 'block' ? t('cardBlock') : cardSettingsAction === 'reissue' ? t('cardReissue') : t('cardFraud')}
                  </motion.button>
                  <button onClick={() => setCardSettingsAction(null)} className="w-full bg-secondary font-bold py-4 rounded-2xl">{t('cardCancel')}</button>
                  {cardSettingsAction === 'done' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-success font-bold mt-4">✅</motion.p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
};

export default Home;
