import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2 } from 'lucide-react';
import humoSticker from '@/assets/humo-sticker.jpeg';

const OrderCard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleShare = async () => {
    const shareUrl = 'https://humo.tj/pay-kids';
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HUMO Pay Kids',
          text: t('orderCardDesc'),
          url: shareUrl,
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(shareUrl);
    }
  };

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

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleShare}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-3 flex items-center gap-2 text-primary font-semibold text-sm"
      >
        <Share2 size={16} />
        {t('orderCardShare')}
      </motion.button>
    </div>
  );
};

export default OrderCard;
