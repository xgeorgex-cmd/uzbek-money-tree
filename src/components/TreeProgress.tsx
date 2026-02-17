import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface TreeProgressProps {
  progress: number; // 0 to 1
  size?: number;
}

const TreeProgress = ({ progress, size = 120 }: TreeProgressProps) => {
  const stages = progress < 0.2 ? 0 : progress < 0.4 ? 1 : progress < 0.6 ? 2 : progress < 0.8 ? 3 : 4;

  return (
    <div className="flex flex-col items-center" style={{ width: size, height: size }}>
      <motion.div
        className="relative flex flex-col items-center justify-end"
        style={{ width: size, height: size }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pot */}
        <div className="w-12 h-8 bg-accent/80 rounded-b-xl rounded-t-sm relative z-10" />
        
        {/* Trunk */}
        <motion.div
          className="w-2 bg-amber-700 rounded-full absolute bottom-8"
          initial={{ height: 0 }}
          animate={{ height: 10 + stages * 12 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        
        {/* Leaves */}
        {stages >= 1 && (
          <motion.div
            className="absolute rounded-full bg-success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            style={{ width: 20 + stages * 8, height: 20 + stages * 8, bottom: 16 + stages * 10 }}
          />
        )}
        {stages >= 2 && (
          <motion.div
            className="absolute rounded-full bg-success/80"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            style={{ width: 16 + stages * 6, height: 16 + stages * 6, bottom: 30 + stages * 8, left: size/2 - 20 }}
          />
        )}
        {stages >= 3 && (
          <motion.div
            className="absolute rounded-full bg-success/70"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: 'spring' }}
            style={{ width: 14 + stages * 5, height: 14 + stages * 5, bottom: 26 + stages * 10, right: size/2 - 20 }}
          />
        )}
        {stages >= 4 && (
          <>
            <motion.div
              className="absolute text-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
              style={{ bottom: 50 + stages * 6, left: size/2 - 24 }}
            >
              🌸
            </motion.div>
            <motion.div
              className="absolute text-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              style={{ bottom: 60 + stages * 4, right: size/2 - 24 }}
            >
              🌸
            </motion.div>
          </>
        )}
        
        {/* Sparkles at completion */}
        {progress >= 1 && (
          <motion.div
            className="absolute text-2xl"
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{ top: -5 }}
          >
            ⭐
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default TreeProgress;
