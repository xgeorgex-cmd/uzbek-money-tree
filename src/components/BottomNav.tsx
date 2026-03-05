import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Clock, PiggyBank, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomNav = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    { path: '/home', icon: Home, label: t('navHome') },
    { path: '/history', icon: Clock, label: t('navHistory') },
    { path: '/goals', icon: PiggyBank, label: t('navGoals') },
    { path: '/settings', icon: Settings, label: t('navSettings') },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border px-2 pb-6 pt-2 shadow-card">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button key={item.path} onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-0.5 p-2 rounded-2xl transition-colors relative">
              {isActive && (
                <motion.div layoutId="nav-active" className="absolute inset-0 bg-primary/10 rounded-2xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
              )}
              <item.icon size={22} className={isActive ? 'text-primary relative z-10' : 'text-muted-foreground relative z-10'} />
              <span className={`text-[11px] font-semibold relative z-10 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
