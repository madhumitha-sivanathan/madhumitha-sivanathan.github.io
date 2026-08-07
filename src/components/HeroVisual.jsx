import { motion } from 'framer-motion';

/**
 * Signature visual: a mock computer-vision detection frame with
 * viewfinder corner brackets, a scanning line, and a small node graph.
 * Grounded in the subject (RTSP / CV pipelines) rather than generic
 * decoration.
 */
export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-square">
      <div className="absolute inset-0 rounded-2xl border border-line bg-base-surface/60 overflow-hidden">
        {/* grid backdrop */}
        <div className="absolute inset-0 bg-noise-grid opacity-60" />

        {/* scanning line */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-accent-cyan/10 to-transparent"
          animate={{ y: ['-10%', '110%'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* node graph */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
          <g stroke="rgba(108,124,246,0.35)" strokeWidth="1">
            <line x1="80" y1="120" x2="200" y2="90" />
            <line x1="80" y1="120" x2="180" y2="220" />
            <line x1="200" y1="90" x2="320" y2="140" />
            <line x1="180" y1="220" x2="320" y2="140" />
            <line x1="180" y1="220" x2="260" y2="300" />
            <line x1="320" y1="140" x2="260" y2="300" />
          </g>
          {[
            [80, 120],
            [200, 90],
            [320, 140],
            [180, 220],
            [260, 300],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4.5"
              fill="#2DD4E8"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </svg>

        {/* detection label */}
        <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[11px] text-accent-cyan">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent-cyan"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
          LIVE_INFERENCE
        </div>

        {/* bounding box */}
        <div className="absolute left-[26%] top-[38%] w-[42%] h-[34%] cv-frame">
          <span className="cv-corner-tr" style={{ top: -1, right: -1, borderTop: '2px solid rgba(45,212,232,0.7)', borderRight: '2px solid rgba(45,212,232,0.7)' }} />
          <span className="cv-corner-bl" style={{ bottom: -1, left: -1, borderBottom: '2px solid rgba(45,212,232,0.7)', borderLeft: '2px solid rgba(45,212,232,0.7)' }} />
          <span className="absolute -top-6 left-0 font-mono text-[10px] text-accent-cyan/90 bg-base/80 px-1.5 py-0.5 rounded">
            object · 0.94
          </span>
        </div>

        {/* bottom readout */}
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-[10px] text-ink-dim">
          <span>frame_id: 004821</span>
          <span className="text-accent-indigo">model: yolo-v8</span>
        </div>
      </div>

      {/* floating stat chip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -bottom-6 -left-6 glass rounded-xl px-4 py-3 hidden sm:block"
      >
        <p className="font-mono text-[10px] text-ink-dim tracking-wide">STREAM</p>
        <p className="font-display text-sm font-semibold text-ink">RTSP → Alert</p>
      </motion.div>
    </div>
  );
}
