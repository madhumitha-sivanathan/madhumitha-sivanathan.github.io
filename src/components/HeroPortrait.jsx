import { profile } from '../data/profile';

/**
 * Hero portrait: the photo is cropped with CSS (no image editing needed),
 * tinted to match the indigo/cyan palette, and framed with the same
 * viewfinder corner brackets used elsewhere on the site.
 *
 * Expects the pre-cropped 4:5 portrait at /public/profile.jpg.
 * The photo already has the site's dark gradient background baked in.
 * To adjust the framing, tweak `backgroundPosition` in the style prop below.
 */
export default function HeroPortrait() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
      {/* ambient glow behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-accent-indigo/25 via-transparent to-accent-cyan/20 blur-3xl"
      />

      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-base-surface shadow-glow">
        {/* photo */}
        <div
          role="img"
          aria-label="Portrait of Madhumitha"
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/profile.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />

        {/* bottom fade into the dark background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-base/95 via-base/60 to-transparent"
        />

        {/* name tag */}
        <div className="absolute inset-x-4 bottom-4 glass rounded-xl px-4 py-3">
          <p className="font-display text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-ink-muted">
            AI/ML · Computer Vision
          </p>
        </div>
      </div>

      {/* viewfinder corner brackets */}
      <span aria-hidden="true" className="absolute -top-2 -left-2 h-5 w-5 rounded-tl-md border-l-2 border-t-2 border-accent-cyan/70" />
      <span aria-hidden="true" className="absolute -top-2 -right-2 h-5 w-5 rounded-tr-md border-r-2 border-t-2 border-accent-cyan/70" />
      <span aria-hidden="true" className="absolute -bottom-2 -left-2 h-5 w-5 rounded-bl-md border-b-2 border-l-2 border-accent-cyan/70" />
      <span aria-hidden="true" className="absolute -bottom-2 -right-2 h-5 w-5 rounded-br-md border-b-2 border-r-2 border-accent-cyan/70" />
    </div>
  );
}
