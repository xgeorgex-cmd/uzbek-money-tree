import { useLanguage } from '@/contexts/LanguageContext';
import { useApp } from '@/contexts/AppContext';
import { motion } from 'framer-motion';
import BottomNav from '@/components/BottomNav';

const formatSum = (amount: number) => Math.abs(amount).toLocaleString('ru-RU');

const History = () => {
  const { t } = useLanguage();
  const { transactions } = useApp();

  const typeColor = (type: string) => {
    if (type === 'income') return 'bg-success/15 text-success';
    if (type === 'savings') return 'bg-savings/15 text-savings-foreground';
    return 'bg-destructive/10 text-destructive';
  };

  const typeSign = (type: string, amount: number) => {
    if (type === 'income') return `+${formatSum(amount)}`;
    return `-${formatSum(amount)}`;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="px-5 pt-12">
        <h1 className="text-2xl font-black mb-6">{t('historyTitle')}</h1>

        {transactions.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-5xl mb-4">📭</p>
            <p className="text-muted-foreground font-semibold">{t('historyEmpty')}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {transactions.map((tx, i) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-2xl p-4 shadow-card flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-lg">
                  {tx.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">{tx.description}</p>
                  <p className="text-xs text-muted-foreground">{tx.date}</p>
                </div>
                <span className={`text-sm font-black px-3 py-1 rounded-lg ${typeColor(tx.type)}`}>
                  {typeSign(tx.type, tx.amount)}
                </span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default History;
