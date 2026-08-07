import Section from './ui/Section';
import Reveal from './ui/Reveal';
import { profile } from '../data/profile';
import { education } from '../data/education';

export default function About() {
  const college = education[0];
  return (
    <Section id="about" eyebrow="About" title="A student who ships working systems">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <Reveal>
          <p className="text-lg leading-relaxed text-ink-muted max-w-2xl">{profile.about}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-xl px-6 py-5 min-w-[260px]">
            <p className="font-mono text-xs text-ink-dim uppercase tracking-wide mb-3">Currently</p>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <dt className="text-ink-muted">Degree</dt>
                <dd className="text-ink text-right">B.Tech, Information Technology</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-ink-muted">Institute</dt>
                <dd className="text-ink text-right">{college.school}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-ink-muted">CGPA</dt>
                <dd className="text-ink text-right font-mono">{college.detail.replace('CGPA: ', '')}</dd>
              </div>
              <div className="flex justify-between gap-6">
                <dt className="text-ink-muted">Focus</dt>
                <dd className="text-ink text-right">AI/ML · Computer Vision</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
