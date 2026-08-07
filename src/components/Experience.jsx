import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-[5px] sm:left-[9px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.1} className="relative">
              <span className="absolute -left-6 sm:-left-10 top-1.5 h-2.5 w-2.5 rounded-full bg-accent-cyan ring-4 ring-base" />
              <div className="glass rounded-xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="font-display font-semibold text-ink">{job.role}</h3>
                  <span className="font-mono text-xs text-accent-cyan">{job.period}</span>
                </div>
                <p className="text-sm font-medium text-ink-muted mb-4">{job.company}</p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-indigo" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
