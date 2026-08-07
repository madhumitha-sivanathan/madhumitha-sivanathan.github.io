import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { skillGroups } from '../data/skills';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      subtitle="Organized by category, not padded with meaningless proficiency bars."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-xl glass p-5 transition-colors hover:border-accent-indigo/30">
              <h3 className="font-display font-semibold text-sm text-ink mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
