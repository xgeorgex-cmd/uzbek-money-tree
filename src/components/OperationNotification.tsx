import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

interface OperationNotificationProps {
  open: boolean;
  title: string;
  emoji: string;
  amount?: number;
  type?: string;
  description?: string;
  onClose: () => void;
  onDetails?: boolean;
}

const formatSum = (amount: number) => amount.toLocaleString('ru-RU');

const OperationNotification = ({ open, title, emoji, amount, type, description, onClose, onDetails }: OperationNotificationProps) => {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-foreground/50 flex items-center justify-center p-6">
          <motion.div initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 30 }}
            className="bg-card rounded-3xl p-6 w-full max-w-sm shadow-card">
            
            {!showDetails ? (
              <>
                <div className="text-center mb-4">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.1 }}
                    className="text-6xl mb-3">{emoji}</motion.div>
                  <h2 className="text-xl font-black mb-1">{title}</h2>
                  {amount !== undefined && (
                    <p className="text-2xl font-black text-primary">{amount > 0 ? '+' : ''}{formatSum(amount)} {t('currencySuffix')}</p>
                  )}
                  {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
                </div>
                <div className="flex gap-3">
                  {onDetails && (
                    <motion.button whileTap={{ scale: 0.97 }} onClick={() => setShowDetails(true)}
                      className="flex-1 bg-secondary text-foreground font-bold py-4 rounded-2xl text-sm">
                      {t('notifDetails')}
                    </motion.button>
                  )}
                  <motion.button whileTap={{ scale: 0.97 }} onClick={onClose}
                    className="flex-1 gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button text-sm">
                    {t('notifOk')}
                  </motion.button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-black">{t('notifDetails')}</h2>
                  <button onClick={() => setShowDetails(false)} className="p-2 rounded-2xl bg-secondary"><X size={16} /></button>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="bg-secondary rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground">{t('notifOperationType')}</p>
                    <p className="font-bold">{type || title}</p>
                  </div>
                  {amount !== undefined && (
                    <div className="bg-secondary rounded-2xl p-4">
                      <p className="text-xs text-muted-foreground">{t('notifOperationAmount')}</p>
                      <p className="font-black text-primary">{amount > 0 ? '+' : ''}{formatSum(amount)} {t('currencySuffix')}</p>
                    </div>
                  )}
                  {description && (
                    <div className="bg-secondary rounded-2xl p-4">
                      <p className="text-xs text-muted-foreground">Описание</p>
                      <p className="font-semibold text-sm">{description}</p>
                    </div>
                  )}
                  <div className="bg-secondary rounded-2xl p-4">
                    <p className="text-xs text-muted-foreground">{t('notifOperationDate')}</p>
                    <p className="font-bold">{new Date().toLocaleDateString('ru-RU')}</p>
                  </div>
                </div>
                <motion.button whileTap={{ scale: 0.97 }} onClick={onClose}
                  className="w-full gradient-primary text-primary-foreground font-bold py-4 rounded-2xl shadow-button">
                  {t('notifOk')}
                </motion.button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OperationNotification;
