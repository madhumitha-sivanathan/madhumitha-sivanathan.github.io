import { ArrowDown } from 'lucide-react';

/** Vertical flow diagram used to show each project's data/processing pipeline. */
export default function PipelineDiagram({ steps }) {
  return (
    <div className="flex flex-col items-start gap-0 font-mono text-xs">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-start">
          <div className="rounded-md border border-line bg-white/[0.03] px-3 py-2 text-ink-muted max-w-xs">
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowDown size={14} className="my-1 ml-3 text-accent-indigo/60" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
