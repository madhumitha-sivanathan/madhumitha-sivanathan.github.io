import { motion } from 'framer-motion';

/**
 * Reusable section shell: consistent spacing, id anchor for nav,
 * eyebrow + title header, and a scroll-triggered reveal.
 */
export default function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative py-24 sm:py-28 scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-12"
          >
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
            )}
            {subtitle && <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
