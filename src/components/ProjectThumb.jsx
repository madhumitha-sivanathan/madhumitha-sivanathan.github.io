import { Flame, Eye, Brain, ShoppingCart } from 'lucide-react';

const ICONS = {
  'fire-detection': Flame,
  'dr-transformer': Eye,
  'brain-tumor': Brain,
  'smart-cart': ShoppingCart,
};

const GRADIENTS = {
  'fire-detection': 'from-orange-500/20 via-accent-indigo/10 to-transparent',
  'dr-transformer': 'from-accent-violet/25 via-accent-cyan/10 to-transparent',
  'brain-tumor': 'from-accent-indigo/25 via-accent-cyan/10 to-transparent',
  'smart-cart': 'from-accent-cyan/20 via-accent-indigo/10 to-transparent',
};

/** Placeholder thumbnail: technical gradient + icon + scanline, until real
 * screenshots/diagrams are available. Avoids fabricating fake product shots. */
export default function ProjectThumb({ id }) {
  const Icon = ICONS[id] ?? Eye;
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-gradient-to-br ${GRADIENTS[id]} bg-base-alt cv-frame`}>
      <div className="absolute inset-0 bg-noise-grid opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon size={44} strokeWidth={1.25} className="text-ink-muted/70" />
      </div>
      <span
        className="absolute"
        style={{ top: -1, left: -1, width: 16, height: 16, borderTop: '2px solid rgba(45,212,232,0.6)', borderLeft: '2px solid rgba(45,212,232,0.6)' }}
      />
      <span
        className="absolute"
        style={{ bottom: -1, right: -1, width: 16, height: 16, borderBottom: '2px solid rgba(45,212,232,0.6)', borderRight: '2px solid rgba(45,212,232,0.6)' }}
      />
    </div>
  );
}
