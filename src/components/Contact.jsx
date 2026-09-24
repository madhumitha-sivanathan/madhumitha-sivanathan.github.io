import { Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { profile } from '../data/profile';

const links = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'GitHub', value: 'View profile', href: profile.github, Icon: GithubIcon },
  { label: 'LinkedIn', value: 'Connect', href: profile.linkedin, Icon: LinkedinIcon },
];

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <Reveal>
        <div className="glass rounded-2xl px-8 py-14 sm:px-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-noise-grid opacity-30 pointer-events-none" aria-hidden="true" />
          <p className="eyebrow mb-4 relative">Get In Touch</p>
          <h2 className="relative text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Let&apos;s build something <span className="text-gradient">interesting</span>.
          </h2>
          <p className="relative max-w-lg mx-auto text-ink-muted mb-10">
            Open to AI/ML, Computer Vision, and MLOps internship &amp; entry-level opportunities. Reach out directly &mdash; I reply to every message.
          </p>

          <div className="relative grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            {links.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex flex-col items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-5 py-6 transition-colors hover:border-accent-indigo/40 hover:bg-white/[0.05]"
              >
                <Icon size={20} className="text-accent-cyan" />
                <span className="text-sm font-medium text-ink">{label}</span>
                <span className="text-xs text-ink-dim">{value}</span>
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            download="Madhumitha_Sivanathan_Resume.pdf"
            className="relative inline-flex items-center gap-2 rounded-lg bg-accent-indigo px-6 py-3 font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <FileDown size={16} />
            Download Resume
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
