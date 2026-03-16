import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from '@/components/BottomNav';
import ProfileEditDialog from '@/components/ProfileEditDialog';
import { Language } from '@/data/translations';
import { appThemes, achievements, avatars, getTranslatedThemes } from '@/data/mockData';
import { MessageSquare, LogOut, Globe, BookOpen, ChevronDown, Palette, Trophy, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

const Settings = () => {
  const { t, language, setLanguage } = useLanguage();
  const { userName, avatarId, customPhoto, logout, theme, setTheme, goals, transactions } = useApp();
  const navigate = useNavigate();
  const avatar = avatars.find(a => a.id === avatarId);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const [showProfileEdit, setShowProfileEdit] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  const handleLogout = () => { logout(); navigate('/'); };

  const tutorialFeatures = [t('settingsFeatureBalance'), t('settingsFeatureGoals'), t('settingsFeatureHistory'), t('settingsFeatureFeedback')];

  // Check achievements
  const totalSavings = goals.reduce((s, g) => s + g.currentAmount, 0);
  const hasCashTx = transactions.some(tx => tx.type === 'cash');
  const unlockedAchievements = achievements.map(a => {
    let unlocked = false;
    if (a.condition === 'no_cash_30_days') unlocked = !hasCashTx;
    if (a.condition === 'savings_100k') unlocked = totalSavings >= 100000;
    if (a.condition === 'login_streak_7') unlocked = false; // mock
    if (a.condition === 'app_customized') unlocked = theme !== 'calm';
    if (a.condition === 'first_goal_created') unlocked = goals.length > 0;
    if (a.condition === 'quiz_perfect') unlocked = false; // mock
    return { ...a, unlocked };
  });
  const earnedCount = unlockedAchievements.filter(a => a.unlocked).length;

  return (
    <div className="min-h-screen bg-background pb-28">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-6">{t('settingsTitle')}</h1>

        {/* Profile */}
        <motion.button whileTap={{ scale: 0.98 }} onClick={() => setShowProfileEdit(true)}
          className="w-full bg-card rounded-3xl p-5 shadow-card flex items-center gap-4 mb-6 text-left">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl overflow-hidden">
            {customPhoto ? <img src={customPhoto} alt="avatar" className="w-full h-full object-cover rounded-2xl" /> : (avatar?.emoji || '🦊')}
          </div>
          <div>
            <h2 className="font-black text-lg">{userName || t('defaultUserName')}</h2>
            <p className="text-sm text-muted-foreground font-semibold">{customPhoto ? '' : (avatar ? t(avatar.nameKey as any) : '')}</p>
          </div>
        </motion.button>

        {/* Theme selector */}
        <div className="bg-card rounded-3xl p-5 shadow-card mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Palette size={18} className="text-primary" />
            <h3 className="font-bold">{t('settingsTheme')}</h3>
          </div>
          <p className="text-xs text-muted-foreground mb-3">{t('settingsThemeDesc')}</p>
          <div className="grid grid-cols-2 gap-2">
            {getTranslatedThemes(t).map(th => (
              <motion.button key={th.key} whileTap={{ scale: 0.95 }} onClick={() => { setTheme(th.key); toast.success('✅ ' + th.name); }}
                className={`py-3 rounded-2xl font-bold text-sm transition-all ${
                  theme === th.key ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-foreground'
                }`}>
                {th.emoji} {th.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div className="bg-card rounded-3xl shadow-card mb-4 overflow-hidden">
          <button onClick={() => setShowAchievements(!showAchievements)} className="w-full p-5 flex items-center gap-3 text-left">
            <Trophy size={18} className="text-accent" />
            <div className="flex-1">
              <h3 className="font-bold">{t('settingsAchievements')}</h3>
              <p className="text-xs text-muted-foreground">{earnedCount}/{achievements.length} {t('settingsAchievementProgress')}</p>
            </div>
            <motion.div animate={{ rotate: showAchievements ? 180 : 0 }}><ChevronDown size={18} className="text-muted-foreground" /></motion.div>
          </button>
          <AnimatePresence>
            {showAchievements && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="px-5 pb-5 space-y-3">
                  {/* Progress bar */}
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div className="h-full gradient-primary rounded-full" initial={{ width: 0 }}
                      animate={{ width: `${(earnedCount / achievements.length) * 100}%` }} />
                  </div>
                  {unlockedAchievements.map((a, i) => (
                    <motion.div key={a.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                      className={`bg-secondary rounded-2xl p-4 flex items-center gap-3 ${!a.unlocked ? 'opacity-50 grayscale' : ''}`}>
                      <span className="text-2xl">{a.unlocked ? a.emoji : '❓'}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{a.unlocked ? t(a.nameKey as any) : '???'}</p>
                        <p className="text-xs text-muted-foreground">{a.unlocked ? t(a.unlockedMessageKey as any) : t(a.descriptionKey as any)}</p>
                      </div>
                      {a.unlocked && <span className="text-success text-lg">✅</span>}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Tutorial */}
        <motion.div className="bg-card rounded-3xl shadow-card mb-4 overflow-hidden">
          <button onClick={() => setShowTutorial(!showTutorial)} className="w-full p-5 flex items-center gap-3 text-left">
            <BookOpen size={18} className="text-primary" />
            <div className="flex-1">
              <h3 className="font-bold">{t('settingsTutorial')}</h3>
              <p className="text-xs text-muted-foreground">{t('settingsTutorialDesc')}</p>
            </div>
            <motion.div animate={{ rotate: showTutorial ? 180 : 0 }}><ChevronDown size={18} className="text-muted-foreground" /></motion.div>
          </button>
          <AnimatePresence>
            {showTutorial && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                <div className="px-5 pb-5 space-y-3">
                  {tutorialFeatures.map((feature, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                      className="bg-secondary rounded-2xl p-3 text-sm font-semibold">
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Language */}
        <div className="bg-card rounded-3xl p-5 shadow-card mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={18} className="text-primary" />
            <h3 className="font-bold">{t('settingsLanguage')}</h3>
          </div>
          <div className="flex gap-2">
            {languages.map(lang => (
              <motion.button key={lang.code} whileTap={{ scale: 0.95 }} onClick={() => setLanguage(lang.code)}
                className={`flex-1 py-3 rounded-2xl font-bold text-sm transition-all ${
                  language === lang.code ? 'gradient-primary text-primary-foreground shadow-button' : 'bg-secondary text-foreground'
                }`}>
                {lang.flag} {lang.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Tests */}
        <motion.button whileTap={{ scale: 0.98 }} onClick={() => navigate('/tests')}
          className="w-full bg-card rounded-3xl p-5 shadow-card flex items-center gap-3 mb-4 text-left">
          <GraduationCap size={18} className="text-accent" />
          <div>
            <span className="font-bold block">{t('testsTitle')}</span>
            <span className="text-xs text-muted-foreground">{t('testsSettingsDesc')}</span>
          </div>
        </motion.button>

        {/* Feedback */}
        <motion.button whileTap={{ scale: 0.98 }} onClick={() => navigate('/feedback')}
          className="w-full bg-card rounded-3xl p-5 shadow-card flex items-center gap-3 mb-4 text-left">
          <MessageSquare size={18} className="text-primary" />
          <span className="font-bold">{t('feedbackTitle')}</span>
        </motion.button>

        {/* Logout */}
        <motion.button whileTap={{ scale: 0.98 }} onClick={handleLogout}
          className="w-full bg-destructive/10 rounded-3xl p-5 flex items-center gap-3 text-destructive font-bold">
          <LogOut size={18} />
          {t('settingsLogout')}
        </motion.button>
      </div>
      <ProfileEditDialog open={showProfileEdit} onClose={() => setShowProfileEdit(false)} />
      <BottomNav />
    </div>
  );
};

export default Settings;
