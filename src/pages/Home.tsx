import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { avatars } from '@/data/mockData';
import { ChevronRight, Sparkles } from 'lucide-react';

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const Home = () => {
  const { t } = useLanguage();
  const { userName, avatarId, balance, transactions, goals } = useApp();
  const navigate = useNavigate();
  const avatar = avatars.find(a => a.id === avatarId);
  const lastTx = transactions[0];
  const primaryGoal = goals[0];
  const goalProgress = primaryGoal ? primaryGoal.currentAmount / primaryGoal.targetAmount : 0;

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

        {/* Balance card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-card/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10"
        >
          <p className="text-primary-foreground/70 text-sm font-semibold mb-1">{t('homeBalance')}</p>
          <motion.p
            className="text-primary-foreground text-4xl font-black"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {formatSum(balance)} <span className="text-lg font-bold">{t('currencySuffix')}</span>
          </motion.p>
        </motion.div>
      </div>

      <div className="px-5 mt-6 space-y-4">
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

        {/* Last transaction */}
        {lastTx && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={() => navigate('/history')}
            className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-4 cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-xl">
              {lastTx.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground font-semibold">{t('homeLastTransaction')}</p>
              <p className="text-sm font-bold truncate">{lastTx.description}</p>
            </div>
            <div className="text-right">
              <p className={`font-black text-sm ${lastTx.type === 'income' ? 'text-success' : lastTx.type === 'savings' ? 'text-savings' : 'text-destructive'}`}>
                {lastTx.type === 'income' ? '+' : ''}{formatSum(lastTx.amount)} {t('currencySuffix')}
              </p>
              <p className="text-xs text-muted-foreground">{lastTx.date}</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </motion.div>
        )}

        {/* Goal progress */}
        {primaryGoal && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card rounded-2xl p-5 shadow-card"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{primaryGoal.emoji}</span>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">{t('homeGoalProgress')}</p>
                  <p className="text-sm font-bold">{primaryGoal.name}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-bold">
                {Math.round(goalProgress * 100)}%
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-full h-3 bg-secondary rounded-full overflow-hidden mb-3">
              <motion.div
                className="h-full gradient-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${goalProgress * 100}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              />
            </div>

            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                {t('homeRemaining')}: <span className="font-bold text-foreground">{formatSum(primaryGoal.targetAmount - primaryGoal.currentAmount)} {t('currencySuffix')}</span>
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
    </div>
  );
};

export default Home;
