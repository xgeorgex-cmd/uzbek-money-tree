import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const OrderCard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <button onClick={() => navigate('/')} className="absolute top-12 left-5 p-2 rounded-xl bg-secondary">
        <ArrowLeft size={20} />
      </button>

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="text-8xl mb-6">
        💳
      </motion.div>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-black mb-4 text-center">
        {t('orderCardTitle')}
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-center mb-8 max-w-xs leading-relaxed">
        {t('orderCardDesc')}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-2xl p-6 shadow-card w-full max-w-sm space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">1️⃣</span>
          <p className="text-sm font-semibold">Попроси маму или папу</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">2️⃣</span>
          <p className="text-sm font-semibold">Зайдите вместе в отделение банка</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">3️⃣</span>
          <p className="text-sm font-semibold">Получи свою карту и начни пользоваться! 🎉</p>
        </div>
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="mt-8 gradient-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-2xl shadow-button"
      >
        Понятно!
      </motion.button>
    </div>
  );
};

export default OrderCard;
