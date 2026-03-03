import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import humoSticker from '@/assets/humo-sticker.jpeg';

const OrderCard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <button onClick={() => navigate('/')} className="absolute top-12 left-5 p-2 rounded-xl bg-secondary">
        <ArrowLeft size={20} />
      </button>

      <motion.img
        src={humoSticker}
        alt="HUMO Pay sticker"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring' }}
        className="w-64 rounded-2xl mb-6 shadow-lg"
      />

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-black mb-4 text-center">
        {t('orderCardTitle')}
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-muted-foreground text-center mb-8 max-w-xs leading-relaxed">
        {t('orderCardDesc')}
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-card rounded-2xl p-6 shadow-card w-full max-w-sm space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">1️⃣</span>
          <p className="text-sm font-semibold">{t('orderCardStep1')}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">2️⃣</span>
          <p className="text-sm font-semibold">{t('orderCardStep2')}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">3️⃣</span>
          <p className="text-sm font-semibold">{t('orderCardStep3')}</p>
        </div>
      </motion.div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/')}
        className="mt-8 gradient-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-2xl shadow-button"
      >
        {t('orderCardGotIt')}
      </motion.button>
    </div>
  );
};

export default OrderCard;
