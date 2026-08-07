import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-dim font-mono">
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite
        </p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-dim hover:text-accent-cyan transition-colors">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-dim hover:text-accent-cyan transition-colors">
            <LinkedinIcon size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-dim hover:text-accent-cyan transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
