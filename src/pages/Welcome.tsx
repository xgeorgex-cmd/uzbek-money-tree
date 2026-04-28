import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/data/translations';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const langOptions: { key: Language; label: string; flag: string }[] = [
  { key: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
  { key: 'ru', label: 'Русский', flag: '🇷🇺' },
  { key: 'en', label: 'English', flag: '🇬🇧' },
  { key: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
];

const Welcome = () => {
  const { t, language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentLang = langOptions.find(l => l.key === language) || langOptions[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowLangMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 gradient-hero text-primary-foreground relative overflow-hidden">
      {/* Language switcher */}
      <div className="absolute top-12 right-6 z-20" ref={menuRef}>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="flex items-center gap-1.5 bg-primary-foreground/15 backdrop-blur-sm px-3 py-2 rounded-2xl border border-primary-foreground/20"
        >
          <span className="text-sm">{currentLang.flag}</span>
          <span className="text-xs font-bold text-primary-foreground">{currentLang.label}</span>
          <ChevronDown size={14} className={`text-primary-foreground/70 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
        </motion.button>
        <AnimatePresence>
          {showLangMenu && (
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -5, scale: 0.95 }}
              className="absolute right-0 mt-2 bg-card rounded-2xl shadow-lg overflow-hidden min-w-[140px]"
            >
              {langOptions.map(opt => (
                <button
                  key={opt.key}
                  onClick={() => { setLanguage(opt.key); setShowLangMenu(false); }}
                  className={`w-full px-4 py-3 flex items-center gap-2 text-sm font-bold transition-colors ${
                    language === opt.key ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  <span>{opt.flag}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
