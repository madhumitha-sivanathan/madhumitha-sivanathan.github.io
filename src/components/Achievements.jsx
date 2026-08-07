import { Award, BadgeCheck, Code2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { achievements } from '../data/achievements';
import { certifications } from '../data/certifications';
import { projects } from '../data/projects';
import { profile } from '../data/profile';

export default function Achievements() {
  const reposToShow = projects.filter((p) => p.featured);

  return (
    <Section id="achievements" eyebrow="Recognition" title="Achievements & Certifications">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-ink-dim mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="glass rounded-lg p-4 flex gap-3">
                  <Award size={18} className="text-accent-cyan shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink">{a.title}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{a.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <h3 className="font-mono text-xs uppercase tracking-wide text-ink-dim mt-8 mb-4">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="glass rounded-lg p-4 flex gap-3">
                  <BadgeCheck size={18} className="text-accent-indigo shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-ink">{c.title}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{c.issuer}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="glass rounded-xl p-6 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <GithubIcon size={18} className="text-ink" />
              <h3 className="font-display font-semibold text-ink">On GitHub</h3>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed mb-5">
              Most of my project work &mdash; computer vision pipelines, deep learning experiments, and web apps &mdash; lives on GitHub.
            </p>

            <div className="space-y-2 mb-5">
              {reposToShow.map((p) => (
                <div key={p.id} className="flex items-center justify-between rounded-lg border border-line bg-white/[0.03] px-3 py-2.5">
                  <span className="font-mono text-xs text-ink-muted truncate">{p.shortTitle}</span>
                  {p.github ? (
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-accent-cyan shrink-0">
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-ink-dim/50 shrink-0 font-mono text-[10px]">soon</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between rounded-lg bg-accent-indigo/10 border border-accent-indigo/25 px-4 py-3">
              <div className="flex items-center gap-2">
                <Code2 size={16} className="text-accent-indigo" />
                <span className="font-mono text-xs text-ink">100+ LeetCode Problems Solved</span>
              </div>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm font-medium text-ink-muted hover:text-ink hover:border-ink-dim transition-colors"
            >
              <GithubIcon size={16} /> View GitHub Profile
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
