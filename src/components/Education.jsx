import { GraduationCap } from 'lucide-react';
import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { education } from '../data/education';

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid sm:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.08}>
            <div className="glass rounded-xl p-6 h-full flex gap-4">
              <div className="shrink-0 h-10 w-10 rounded-lg bg-accent-indigo/10 border border-accent-indigo/25 flex items-center justify-center">
                <GraduationCap size={18} className="text-accent-indigo" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink text-sm leading-snug">{edu.school}</h3>
                <p className="text-sm text-ink-muted mt-1">{edu.degree}</p>
                <div className="mt-3 flex items-center gap-3 font-mono text-xs">
                  <span className="text-accent-cyan">{edu.detail}</span>
                  {edu.period && <span className="text-ink-dim">{edu.period}</span>}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
