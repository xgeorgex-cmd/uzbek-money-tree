import { motion } from 'framer-motion';

interface PhoenixProgressProps {
  progress: number; // 0 to 1
  size?: number;
}

const PhoenixProgress = ({ progress, size = 80 }: PhoenixProgressProps) => {
  // 0-20% egg, 20-40% cracking, 40-60% hatching, 60-80% baby phoenix, 80-100% full phoenix
  const stage = progress < 0.2 ? 0 : progress < 0.4 ? 1 : progress < 0.6 ? 2 : progress < 0.8 ? 3 : 4;

  const emojis = ['🥚', '🥚', '🐣', '🐥', '🔥'];
  const labels = ['', '💫', '', '✨', '⭐'];

  return (
    <div className="flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="text-4xl"
          style={{ fontSize: size * 0.45 }}
          animate={stage >= 3 ? { y: [0, -3, 0], rotate: [0, 5, -5, 0] } : stage === 1 ? { rotate: [-3, 3, -3] } : {}}
          transition={{ repeat: Infinity, duration: stage >= 3 ? 1.5 : 0.5 }}
        >
          {emojis[stage]}
        </motion.span>

        {labels[stage] && (
          <motion.span
            className="absolute -top-1 -right-1 text-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
          >
            {labels[stage]}
          </motion.span>
        )}

        {progress >= 1 && (
          <motion.span
            className="absolute -top-2 text-lg"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            🌟
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default PhoenixProgress;
