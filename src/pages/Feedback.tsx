import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from '@/components/BottomNav';
import { Send, CheckCircle } from 'lucide-react';

const Feedback = () => {
  const { t } = useLanguage();
  const [category, setCategory] = useState<string>('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const categories = [
    { key: 'like', label: t('feedbackLike') },
    { key: 'suggest', label: t('feedbackSuggest') },
    { key: 'broken', label: t('feedbackBroken') },
  ];

  const handleSend = () => {
    if (!category) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setCategory('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-6">{t('feedbackTitle')}</h1>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="thanks"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center mt-16"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: 2, duration: 0.5 }}
              >
                <CheckCircle size={64} className="text-success mx-auto mb-4" />
              </motion.div>
              <p className="text-lg font-bold">{t('feedbackThanks')}</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex flex-col gap-3 mb-6">
                {categories.map(cat => (
                  <motion.button
                    key={cat.key}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setCategory(cat.key)}
                    className={`p-4 rounded-2xl text-left font-bold transition-all ${
                      category === cat.key
                        ? 'bg-primary/10 ring-2 ring-primary'
                        : 'bg-card shadow-card'
                    }`}
                  >
                    {cat.label}
                  </motion.button>
                ))}
              </div>

              {category && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <label className="text-sm font-bold text-muted-foreground mb-2 block">{t('feedbackMessage')}</label>
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value.slice(0, 300))}
                    placeholder={t('feedbackMessagePlaceholder')}
                    rows={4}
                    className="w-full bg-secondary text-foreground font-semibold p-4 rounded-2xl mb-4 outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSend}
                    className="w-full gradient-primary text-primary-foreground font-bold text-lg py-4 rounded-2xl shadow-button flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    {t('feedbackSend')}
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <BottomNav />
    </div>
  );
};

export default Feedback;
