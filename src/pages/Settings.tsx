import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import BottomNav from '@/components/BottomNav';
import { Language } from '@/data/translations';
import { MessageSquare, LogOut, Globe } from 'lucide-react';
import { avatars } from '@/data/mockData';

const Settings = () => {
  const { t, language, setLanguage } = useLanguage();
  const { userName, avatarId, logout } = useApp();
  const navigate = useNavigate();
  const avatar = avatars.find(a => a.id === avatarId);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-6">{t('settingsTitle')}</h1>

        {/* Profile */}
        <div className="bg-card rounded-2xl p-5 shadow-card flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl">
            {avatar?.emoji || '🦊'}
          </div>
          <div>
            <h2 className="font-black text-lg">{userName || 'Друг'}</h2>
            <p className="text-sm text-muted-foreground font-semibold">{avatar?.name}</p>
          </div>
        </div>

        {/* Language */}
        <div className="bg-card rounded-2xl p-5 shadow-card mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-primary" />
            <h3 className="font-bold">{t('settingsLanguage')}</h3>
          </div>
          <div className="flex gap-2">
            {languages.map(lang => (
              <motion.button
                key={lang.code}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(lang.code)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                  language === lang.code
                    ? 'gradient-primary text-primary-foreground shadow-button'
                    : 'bg-secondary text-foreground'
                }`}
              >
                {lang.flag} {lang.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Feedback link */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/feedback')}
          className="w-full bg-card rounded-2xl p-5 shadow-card flex items-center gap-3 mb-4 text-left"
        >
          <MessageSquare size={18} className="text-primary" />
          <span className="font-bold">{t('feedbackTitle')}</span>
        </motion.button>

        {/* Logout */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full bg-destructive/10 rounded-2xl p-5 flex items-center gap-3 text-destructive font-bold"
        >
          <LogOut size={18} />
          {t('settingsLogout')}
        </motion.button>
      </div>
      <BottomNav />
    </div>
  );
};

export default Settings;
