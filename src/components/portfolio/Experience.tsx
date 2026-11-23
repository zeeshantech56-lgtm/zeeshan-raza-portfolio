import { BookOpen, Cpu, Landmark } from "lucide-react";
import { EXPERIENCE, LEADERSHIP, METRICS } from "@/data/portfolio";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const ICONS = [Cpu, Landmark, BookOpen];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionHeader
        number="02"
        label="Experience"
        title={
          <>
            Experience <span className="serif-accent text-primary">beyond the classroom.</span>
          </>
        }
      >
        Hands-on e-commerce work, alongside leading student groups and teaching.
      </SectionHeader>

      <div className="mt-12 grid gap-3 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="bento h-full p-7 md:p-9">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-lg font-semibold text-primary-foreground">
                  G
                </span>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">{EXPERIENCE.company}</h3>
                  <p className="text-primary">{EXPERIENCE.role}</p>
                </div>
              </div>
              <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {EXPERIENCE.year}
              </span>
            </div>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">{EXPERIENCE.summary}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {METRICS.map((m) => (
                <div key={m.label} className="rounded-2xl bg-secondary p-5">
                  <CountUp value={m.value} className="display block text-[2.4rem]" />
                  <p className="mt-2 text-sm font-medium">{m.label}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {EXPERIENCE.work.map((w) => (
                <span key={w} className="rounded-full border border-border px-3.5 py-1 text-sm">
                  {w}
                </span>
              ))}
            </div>
            <p className="mt-5 font-mono text-[0.7rem] tracking-wide text-muted-foreground">{EXPERIENCE.note}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5">
          <div className="bento h-full p-7 md:p-9">
            <p className="eyebrow">Leadership &amp; Teaching</p>
            <ul className="mt-6 space-y-3">
              {LEADERSHIP.map((l, i) => {
                const Icon = ICONS[i] ?? Cpu;
                return (
                  <li key={l.role} className="flex gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-secondary">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <div>
                      <p className="font-medium leading-snug tracking-tight">{l.role}</p>
                      {"detail" in l && <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.detail}</p>}
                      <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary">{l.tag}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
