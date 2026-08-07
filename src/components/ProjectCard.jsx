import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, Workflow } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import ProjectThumb from './ProjectThumb';
import PipelineDiagram from './PipelineDiagram';

export default function ProjectCard({ project }) {
  const [showPipeline, setShowPipeline] = useState(false);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group rounded-xl glass overflow-hidden flex flex-col h-full"
    >
      <ProjectThumb id={project.id} />

      <div className="flex flex-col flex-1 p-6">
        <p className="font-mono text-[11px] tracking-wide text-accent-cyan uppercase mb-2">{project.tag}</p>
        <h3 className="font-display font-semibold text-lg text-ink leading-snug">{project.shortTitle}</h3>
        <p className="mt-3 text-sm text-ink-muted leading-relaxed">{project.description}</p>

        <div className="mt-4 space-y-2 text-sm">
          <p className="text-ink-dim">
            <span className="text-ink-muted font-medium">Built:</span> {project.contribution}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded border border-line bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-ink-muted">
              {t}
            </span>
          ))}
        </div>

        {project.pipeline && (
          <div className="mt-5">
            <button
              onClick={() => setShowPipeline((v) => !v)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-indigo hover:text-accent-cyan transition-colors"
              aria-expanded={showPipeline}
            >
              <Workflow size={14} />
              {showPipeline ? 'Hide architecture' : 'View architecture'}
              <ChevronDown size={14} className={`transition-transform ${showPipeline ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {showPipeline && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-line">
                    <PipelineDiagram steps={project.pipeline} />
                    <p className="mt-4 text-xs text-ink-dim leading-relaxed">
                      <span className="text-ink-muted">Result: </span>
                      {project.result}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-line flex items-center gap-3">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-xs font-medium text-ink-muted hover:text-ink hover:border-ink-dim transition-colors"
            >
              <GithubIcon size={14} /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3 py-2 text-xs font-medium text-ink-dim/60 cursor-not-allowed">
              <GithubIcon size={14} /> Repo link coming soon
            </span>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-accent-indigo/15 border border-accent-indigo/30 px-3 py-2 text-xs font-medium text-accent-indigo hover:bg-accent-indigo/25 transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          <span className="ml-auto font-mono text-[11px] text-ink-dim">{project.status}</span>
        </div>
      </div>
    </motion.article>
  );
}
