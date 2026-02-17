import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { avatars } from '@/data/mockData';

const Onboarding = () => {
  const { t } = useLanguage();
  const { completeOnboarding } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedAvatar, setSelectedAvatar] = useState('1');
  const [name, setName] = useState('');

  const features = [
    { emoji: '💳', title: t('onboardFeature1Title'), desc: t('onboardFeature1Desc') },
    { emoji: '🎯', title: t('onboardFeature2Title'), desc: t('onboardFeature2Desc') },
    { emoji: '🧠', title: t('onboardFeature3Title'), desc: t('onboardFeature3Desc') },
  ];

  const handleFinish = () => {
    completeOnboarding(name || 'Друг', selectedAvatar);
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="avatar"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-sm text-center"
          >
            <h1 className="text-2xl font-black mb-2">{t('onboardChooseAvatar')}</h1>
            <p className="text-muted-foreground mb-8">{t('onboardAvatarSubtitle')}</p>

            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {avatars.map((av) => (
                <motion.button
                  key={av.id}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setSelectedAvatar(av.id)}
                  className={`w-16 h-16 text-3xl rounded-2xl flex items-center justify-center transition-all ${
                    selectedAvatar === av.id
                      ? 'bg-primary/15 ring-3 ring-primary shadow-soft'
                      : 'bg-secondary'
                  }`}
                >
                  {av.emoji}
                </motion.button>
              ))}
            </div>

            <input
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 20))}
              placeholder="Как тебя зовут?"
              className="w-full bg-secondary text-foreground text-center text-lg font-bold p-4 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-primary"
            />

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep(1)}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button"
            >
              {t('onboardNext')}
            </motion.button>
          </motion.div>
        )}

        {step >= 1 && step <= 3 && (
          <motion.div
            key={`feature-${step}`}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            className="w-full max-w-sm text-center"
          >
            <motion.div
              className="text-7xl mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {features[step - 1].emoji}
            </motion.div>
            <h2 className="text-2xl font-black mb-3">{features[step - 1].title}</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">{features[step - 1].desc}</p>

            {/* Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === step ? 'bg-primary' : 'bg-border'}`} />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => step < 3 ? setStep(step + 1) : handleFinish()}
              className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button"
            >
              {step < 3 ? t('onboardNext') : t('onboardFinish')}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Onboarding;
