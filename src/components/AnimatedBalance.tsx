import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBalanceProps {
  value: number;
  className?: string;
  duration?: number;
}

const formatSum = (amount: number) => Math.round(amount).toLocaleString('ru-RU');

const AnimatedBalance = ({ value, className = '', duration = 600 }: AnimatedBalanceProps) => {
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = prevRef.current;
    const to = value;
    if (from === to) return;

    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = to;
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value, duration]);

  const changed = prevRef.current !== value;

  return (
    <motion.span
      className={className}
      animate={changed ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 0.3 }}
    >
      {formatSum(display)}
    </motion.span>
  );
};

export default AnimatedBalance;
