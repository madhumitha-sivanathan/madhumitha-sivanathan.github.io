export default function Badge({ children, tone = 'default' }) {
  const tones = {
    default: 'bg-white/[0.04] border-line text-ink-muted',
    accent: 'bg-accent-indigo/10 border-accent-indigo/30 text-accent-indigo',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-tight ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
