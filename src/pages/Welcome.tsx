import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 gradient-hero text-primary-foreground relative overflow-hidden">
      <motion.div className="absolute top-20 left-8 text-5xl" animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}>💰</motion.div>
      <motion.div className="absolute top-32 right-10 text-4xl" animate={{ y: [0, -10, 0], rotate: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}>🌟</motion.div>
      <motion.div className="absolute bottom-60 left-12 text-4xl" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}>🎯</motion.div>
      <motion.div className="absolute bottom-72 right-8 text-5xl" animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', delay: 0.3 }}>🔐</motion.div>

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }} className="text-8xl mb-6">🏦</motion.div>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl font-black mb-2">{t('welcomeTitle')}</motion.h1>
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl font-bold mb-4 text-center">{t('welcomeSubtitle')}</motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-base text-center opacity-90 mb-12 max-w-xs leading-relaxed">{t('welcomeDescription')}</motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="w-full max-w-xs space-y-3">
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }} onClick={() => navigate('/login')}
          className="w-full bg-card text-foreground font-bold text-lg px-10 py-5 rounded-3xl shadow-button">
          {t('welcomeHaveCard')}
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }} onClick={() => navigate('/order-card')}
          className="w-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground font-bold text-lg px-10 py-5 rounded-3xl border border-primary-foreground/30">
          {t('welcomeOrderCard')}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Welcome;
