import { motion } from 'framer-motion';

/** Small wrapper for scroll-triggered fade/slide reveals on arbitrary children. */
export default function Reveal({ children, delay = 0, className = '', y = 16 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
