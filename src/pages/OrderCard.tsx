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
          url: shareUrl
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col px-5 pt-14 pb-6 bg-background">
      <button onClick={() => navigate('/')} className="absolute top-12 left-5 p-2 rounded-xl bg-secondary">
        <ArrowLeft size={20} />
      </button>

      <div className="flex flex-col items-center flex-1">
        <motion.img

          alt="HUMO Pay sticker"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
          className="w-40 rounded-2xl mb-3 shadow-lg" src="/lovable-uploads/14d66e40-35da-4c4e-8457-2a7d656076b4.png" />
        

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-black mb-1 text-center">
          {t('orderCardTitle')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-center mb-4 text-sm max-w-xs leading-relaxed">
          {t('orderCardDesc')}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-4 shadow-card w-full max-w-sm space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-lg">1️⃣</span>
            <p className="text-sm font-semibold">{t('orderCardStep1')}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg">2️⃣</span>
            <p className="text-sm font-semibold">{t('orderCardStep2')}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg">3️⃣</span>
            <p className="text-sm font-semibold">{t('orderCardStep3')}</p>
          </div>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleShare}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-sm gradient-primary text-primary-foreground font-bold text-base py-4 rounded-2xl shadow-button flex items-center justify-center gap-2 mb-3">
          
          <Share2 size={18} />
          {t('orderCardShare')}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm bg-secondary text-foreground font-bold text-base py-4 rounded-2xl">
          
          {t('orderCardGotIt')}
        </motion.button>
      </div>
    </div>);

};

export default OrderCard;