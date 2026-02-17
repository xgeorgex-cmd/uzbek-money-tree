import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { avatars, mockStories } from '@/data/mockData';
import { ChevronRight, Sparkles, X, Send, CreditCard, Settings as SettingsIcon } from 'lucide-react';
import BottomNav from '@/components/BottomNav';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const Home = () => {
  const { t } = useLanguage();
  const { userName, avatarId, balance, transactions, goals } = useApp();
  const navigate = useNavigate();
  const avatar = avatars.find(a => a.id === avatarId);
  const lastTxs = transactions.slice(0, 3);

  const totalSavings = goals.reduce((s, g) => s + g.currentAmount, 0);
  const closestGoal = [...goals]
    .filter(g => g.currentAmount < g.targetAmount)
    .sort((a, b) => (b.currentAmount / b.targetAmount) - (a.currentAmount / a.targetAmount))[0];
  const closestProgress = closestGoal ? closestGoal.currentAmount / closestGoal.targetAmount : 0;

  const [activeStory, setActiveStory] = useState<string | null>(null);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const currentStory = mockStories.find(s => s.id === activeStory);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-primary px-6 pt-12 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="w-12 h-12 bg-card/20 rounded-2xl flex items-center justify-center text-2xl"
            whileTap={{ scale: 0.9, rotate: 10 }}
          >
            {avatar?.emoji || '🦊'}
          </motion.div>
          <div>
            <p className="text-primary-foreground/70 text-sm font-semibold">{t('homeGreeting')},</p>
            <h1 className="text-primary-foreground text-xl font-black">{userName || 'Друг'}!</h1>
          </div>
        </div>

        {/* Balance card — clickable */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={() => setShowCardDetail(true)}
          className="bg-card/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10 cursor-pointer active:scale-[0.98] transition-transform"
        >
          <p className="text-primary-foreground/70 text-sm font-semibold mb-1">{t('homeCardBalance')}</p>
          <motion.p
            className="text-primary-foreground text-4xl font-black"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {formatSum(balance)} <span className="text-lg font-bold">{t('currencySuffix')}</span>
          </motion.p>
          <p className="text-primary-foreground/50 text-xs font-semibold mt-1">{t('homeCardDetails')} →</p>
        </motion.div>
      </div>

      <div className="px-5 mt-6 space-y-4">
        {/* Stories ribbon */}
        <div>
          <p className="text-xs font-bold text-muted-foreground mb-2">{t('homeStories')}</p>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {mockStories.map((story) => (
              <motion.button
                key={story.id}
                whileTap={{ scale: 0.93 }}
                onClick={() => setActiveStory(story.id)}
                className={`shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 ${story.color} border-2 border-transparent`}
              >
                <span className="text-2xl">{story.emoji}</span>
                <span className="text-[9px] font-bold text-foreground/70 leading-tight text-center px-1">{story.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Story tip banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-savings/15 border border-savings/30 rounded-2xl p-4 flex items-start gap-3"
        >
          <Sparkles className="text-savings shrink-0 mt-0.5" size={20} />
          <p className="text-sm font-semibold text-foreground/80 leading-relaxed">{t('storyFinTip')}</p>
        </motion.div>

        {/* Last 3 transactions */}
        <div>
          <p className="text-xs font-bold text-muted-foreground mb-2">{t('homeLastTransactions')}</p>
          {lastTxs.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              onClick={() => navigate('/history')}
              className="bg-card rounded-2xl p-3 shadow-card flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform mb-2"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg">
                {tx.icon}
              </div>
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

        {/* Goal progress — closest + total savings */}
        {closestGoal && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-2xl p-5 shadow-card"
          >
            {/* Total savings */}
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
              <p className="text-xs text-muted-foreground font-bold">
                {Math.round(closestProgress * 100)}%
              </p>
            </div>

            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${closestProgress * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                {t('homeRemaining')}: <span className="font-bold text-foreground">{formatSum(closestGoal.targetAmount - closestGoal.currentAmount)} {t('currencySuffix')}</span>
              </p>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/goals')}
              className="w-full gradient-warm text-accent-foreground font-bold py-3 rounded-xl mt-4 shadow-button text-sm"
            >
              {t('homeGoToDream')}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Story fullscreen modal */}
      <AnimatePresence>
        {activeStory && currentStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/60 flex items-center justify-center p-6"
            onClick={() => setActiveStory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-card"
            >
              <div className="flex justify-end mb-2">
                <button onClick={() => setActiveStory(null)} className="p-1.5 rounded-full bg-secondary"><X size={16} /></button>
              </div>
              <div className="text-6xl text-center mb-4">{currentStory.emoji}</div>
              <h2 className="text-xl font-black text-center mb-3">{currentStory.title}</h2>
              <p className="text-muted-foreground text-center leading-relaxed">{currentStory.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card detail modal */}
      <AnimatePresence>
        {showCardDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 flex items-end"
            onClick={() => setShowCardDetail(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card w-full rounded-t-3xl p-6 pb-10"
            >
              <div className="w-10 h-1 bg-border rounded-full mx-auto mb-6" />
              <h2 className="text-xl font-black mb-6">{t('homeCardDetails')}</h2>

              {/* Card visual */}
              <div className="gradient-primary rounded-2xl p-5 mb-6">
                <p className="text-primary-foreground/70 text-xs font-semibold mb-1">{t('homeCardBalance')}</p>
                <p className="text-primary-foreground text-3xl font-black mb-4">{formatSum(balance)} {t('currencySuffix')}</p>
                <p className="text-primary-foreground/60 text-sm font-bold tracking-widest">•••• •••• •••• 9012</p>
              </div>

              <div className="space-y-3">
                <motion.button whileTap={{ scale: 0.97 }} className="w-full bg-secondary rounded-2xl p-4 flex items-center gap-3 font-bold text-sm">
                  <Send size={18} className="text-primary" />
                  {t('homeTransferMoney')}
                </motion.button>
                <motion.button whileTap={{ scale: 0.97 }} className="w-full bg-secondary rounded-2xl p-4 flex items-center gap-3 font-bold text-sm">
                  <CreditCard size={18} className="text-success" />
                  {t('homeAskParentTopUp')}
                </motion.button>
                <motion.button whileTap={{ scale: 0.97 }} className="w-full bg-secondary rounded-2xl p-4 flex items-center gap-3 font-bold text-sm">
                  <SettingsIcon size={18} className="text-muted-foreground" />
                  {t('homeCardSettings')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
};

export default Home;
