import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { avatars } from '@/data/mockData';
import { Camera } from 'lucide-react';

const Onboarding = () => {
  const { t } = useLanguage();
  const { completeOnboarding } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState('1');
  const [name, setName] = useState('');
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const features = [
    { emoji: '💳', title: t('onboardFeature1Title'), desc: t('onboardFeature1Desc') },
    { emoji: '🎯', title: t('onboardFeature2Title'), desc: t('onboardFeature2Desc') },
    { emoji: '🧠', title: t('onboardFeature3Title'), desc: t('onboardFeature3Desc') },
  ];

  const handleFinish = () => {
    completeOnboarding(name || 'Друг', customPhoto ? 'custom' : selectedAvatar, customPhoto);
    navigate('/home');
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setCustomPhoto(ev.target?.result as string);
        setSelectedAvatar('custom');
      };
      reader.readAsDataURL(file);
    }
  };

  const goNext = () => { if (step < 3) setStep(step + 1); else handleFinish(); };
  const goPrev = () => { if (step > 1) setStep(step - 1); };
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) goNext();
    else if (info.offset.x > 50) goPrev();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="avatar" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="w-full max-w-sm text-center">
            <h1 className="text-2xl font-black mb-2">{t('onboardChooseAvatar')}</h1>
            <p className="text-muted-foreground mb-6">{t('onboardAvatarSubtitle')}</p>

            <div className="grid grid-cols-5 gap-3 mb-4">
              {avatars.map((av) => (
                <motion.button key={av.id} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}
                  onClick={() => { setSelectedAvatar(av.id); setCustomPhoto(null); }}
                  className={`w-14 h-14 text-2xl rounded-2xl flex items-center justify-center transition-all mx-auto ${
                    selectedAvatar === av.id && !customPhoto ? 'bg-primary/15 ring-3 ring-primary shadow-soft' : 'bg-secondary'
                  }`}>
                  {av.emoji}
                </motion.button>
              ))}
            </div>

            <div className="flex justify-center mb-6">
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              <motion.button whileTap={{ scale: 0.95 }} onClick={() => fileInputRef.current?.click()}
                className={`flex items-center gap-2 px-5 py-4 rounded-3xl text-sm font-bold transition-all ${
                  customPhoto ? 'bg-primary/15 ring-2 ring-primary' : 'bg-secondary text-muted-foreground'
                }`}>
                {customPhoto ? (
                  <img src={customPhoto} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <Camera size={18} />
                )}
                {t('onboardUploadPhoto')}
              </motion.button>
            </div>

            <input value={name} onChange={(e) => setName(e.target.value.slice(0, 20))}
              placeholder="Как тебя зовут?"
              className="w-full bg-secondary text-foreground text-center text-lg font-bold p-5 rounded-3xl mb-6 outline-none focus:ring-2 focus:ring-primary" />

            <motion.button whileTap={{ scale: 0.97 }} onClick={() => setStep(1)}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button">
              {t('onboardNext')}
            </motion.button>
          </motion.div>
        )}

        {step >= 1 && step <= 3 && (
          <motion.div key={`feature-${step}`} initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -80 }}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.2} onDragEnd={handleDragEnd}
            className="w-full max-w-sm text-center cursor-grab active:cursor-grabbing">
            <motion.div className="text-7xl mb-6" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              {features[step - 1].emoji}
            </motion.div>
            <h2 className="text-2xl font-black mb-3">{features[step - 1].title}</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{features[step - 1].desc}</p>
            <p className="text-xs text-muted-foreground mb-4 animate-pulse">{t('onboardSwipeHint')}</p>

            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === step ? 'bg-primary' : 'bg-border'}`} />
              ))}
            </div>

            <motion.button whileTap={{ scale: 0.97 }} onClick={goNext}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-5 rounded-3xl shadow-button">
              {step < 3 ? t('onboardNext') : t('onboardFinish')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
