import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import { profile } from '../data/profile';
import HeroVisual from './HeroVisual';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 scroll-mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="eyebrow mb-5">
            AI / ML · Computer Vision · Data Science
          </motion.p>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]">
            Hi, I&apos;m <span className="text-gradient">Madhumitha</span>.
          </motion.h1>

          <motion.p variants={item} className="mt-4 text-xl sm:text-2xl font-display text-ink-muted">
            {profile.role}
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-ink-muted leading-relaxed">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-accent-indigo px-5 py-3 font-medium text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg glass px-5 py-3 font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-medium text-ink-muted transition-colors hover:text-ink hover:border-ink-dim"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-ink-dim hover:text-accent-cyan transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-ink-dim hover:text-accent-cyan transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="text-ink-dim hover:text-accent-cyan transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}
