import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Share2, Coins, PiggyBank, Wallet, ShieldCheck } from 'lucide-react';
import cardSticker from '@/assets/card-sticker-cropped.png';
import { useRef, useState, useEffect } from 'react';

const OrderCard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const benefits = [
    { icon: Coins, title: t('orderBenefit1Title'), desc: t('orderBenefit1Desc'), gradient: 'from-amber-400/20 to-orange-400/20', iconColor: 'text-amber-500' },
    { icon: PiggyBank, title: t('orderBenefit2Title'), desc: t('orderBenefit2Desc'), gradient: 'from-pink-400/20 to-rose-400/20', iconColor: 'text-pink-500' },
    { icon: Wallet, title: t('orderBenefit3Title'), desc: t('orderBenefit3Desc'), gradient: 'from-violet-400/20 to-purple-400/20', iconColor: 'text-violet-500' },
    { icon: ShieldCheck, title: t('orderBenefit4Title'), desc: t('orderBenefit4Desc'), gradient: 'from-emerald-400/20 to-teal-400/20', iconColor: 'text-emerald-500' },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.75 + 12;
      setActiveSlide(Math.round(scrollLeft / cardWidth));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen flex flex-col pt-14 pb-6 bg-background">
      <button onClick={() => navigate('/')} className="absolute top-12 left-5 p-2 rounded-xl bg-secondary z-10">
        <ArrowLeft size={20} />
      </button>

      <div className="flex flex-col items-center flex-1 px-5">
        <motion.img
          src={cardSticker}
          alt="HUMO Pay sticker"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
          className="w-56 rounded-2xl mb-3 shadow-lg"
        />

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl font-black mb-1 text-center">
          {t('orderCardTitle')}
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-muted-foreground text-center mb-4 text-sm max-w-xs leading-relaxed">
          {t('orderCardDesc')}
        </motion.p>
      </div>

      {/* Benefits carousel */}
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mb-4">
        <h2 className="text-base font-bold px-5 mb-3">{t('orderBenefitsHeading')}</h2>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-5 pb-2 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              className={`snap-start shrink-0 w-[75%] rounded-2xl p-4 bg-gradient-to-br ${b.gradient} border border-border/50`}
            >
              <b.icon size={32} className={`${b.iconColor} mb-3`} />
              <h3 className="font-bold text-sm mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-1.5 mt-2">
          {benefits.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-5 bg-primary' : 'w-1.5 bg-muted-foreground/30'}`} />
          ))}
        </div>
      </motion.div>

      {/* Steps */}
      <div className="px-5">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-card rounded-2xl p-4 shadow-card w-full max-w-sm mx-auto space-y-3 mb-4">
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
          className="w-full max-w-sm mx-auto gradient-primary text-primary-foreground font-bold text-base py-4 rounded-2xl shadow-button flex items-center justify-center gap-2 mb-3">
          <Share2 size={18} />
          {t('orderCardShare')}
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm mx-auto bg-secondary text-foreground font-bold text-base py-4 rounded-2xl">
          {t('orderCardGotIt')}
        </motion.button>
      </div>
    </div>
  );
};

export default OrderCard;
