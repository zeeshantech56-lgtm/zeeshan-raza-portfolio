import { EDUCATION, OUTSIDE } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-8 md:pt-24">
      <SectionHeader
        number="04"
        label="Education & beyond"
        title={
          <>
            Learning, questioning, <span className="serif-accent text-primary">experimenting.</span>
          </>
        }
      />

      <div className="mt-12 grid gap-3 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <ul className="bento h-full divide-y divide-border px-7 py-2 md:px-9">
            {EDUCATION.map((r) => (
              <li key={r.title} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <span className="flex items-center gap-3 text-lg tracking-tight">
                  {"current" in r && r.current && (
                    <span className="animate-pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  )}
                  {r.title}
                </span>
                <span
                  className={cn(
                    "w-fit rounded-full px-3 py-1 font-mono text-xs",
                    "current" in r && r.current ? "bg-primary-soft text-primary" : "bg-secondary text-muted-foreground",
                  )}
                >
                  {r.meta}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-4">
          <div className="bento h-full overflow-hidden border-transparent bg-gradient-primary p-7 text-primary-foreground md:p-9">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-primary-foreground/70">
              Outside the work
            </p>
            <ul className="mt-6 space-y-4">
              {OUTSIDE.map((item, i) => (
                <li key={item} className="flex gap-4 border-b border-primary-foreground/15 pb-4 last:border-0">
                  <span className="font-mono text-xs text-primary-foreground/60">0{i + 1}</span>
                  <span className="text-xl leading-snug tracking-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
