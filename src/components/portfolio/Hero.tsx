import { ArrowDownRight, ArrowUpRight, GraduationCap, LayoutGrid, Presentation, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT, EXPERIENCE, INTRO, METRICS, PROJECTS } from "@/data/portfolio";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const invoicer = PROJECTS.find((p) => p.id === "invoicer")!;

const FACTS = [
  { icon: LayoutGrid, title: `${PROJECTS.length} live projects`, text: "Web apps & websites", href: "#projects" },
  { icon: GraduationCap, title: "B.Com · CGPA 8.23", text: "Now pursuing postgraduate management", href: "#education" },
  { icon: Users, title: "Head of College AI Club", text: "& Student Union Vice-President", href: "#experience" },
  { icon: Presentation, title: "3 months teaching", text: "Class 12 IP · 25+ students", href: "#experience" },
];

export function Hero() {
  return (
    <section id="top" className="page-glow pt-24 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-3 px-3 md:px-6 lg:grid-cols-12">
        {/* Intro */}
        <Reveal className="lg:col-span-7 lg:row-span-2">
          <div className="bento flex h-full flex-col overflow-hidden p-7 md:p-10">
            <div aria-hidden className="hairline-grid pointer-events-none absolute inset-0 opacity-50" />
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative">
              <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                {INTRO.status}
              </p>
              <h1 className="display mt-8 text-[clamp(2.4rem,4.6vw,4.1rem)] text-balance">
                Hi, I'm Zeeshan. I study business and{" "}
                <span className="serif-accent text-primary">build products</span> with AI tools.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{INTRO.summary}</p>
            </div>
            <div className="relative mt-auto flex flex-wrap gap-3 pt-10">
              <Button asChild variant="hero" size="xl">
                <a href="#projects">
                  See my projects <ArrowDownRight />
                </a>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href={`mailto:${CONTACT.email}`}>Email me</a>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Metrics */}
        <Reveal delay={120} className="lg:col-span-5">
          <a href="#experience" className="bento bento-hover block h-full overflow-hidden border-transparent bg-gradient-ink p-7 text-ink-foreground md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-ink-foreground/55">
                  {EXPERIENCE.company} · {EXPERIENCE.year}
                </p>
                <p className="mt-2 text-xl font-medium tracking-tight">{EXPERIENCE.role}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-foreground/50" />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <CountUp value={m.value} className="display block text-[clamp(1.8rem,3vw,2.5rem)]" />
                  <p className="mt-2 text-xs leading-snug text-ink-foreground/60">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-ink-foreground/10 pt-4 text-xs text-ink-foreground/45">
              On the product listings I worked on
            </p>
          </a>
        </Reveal>

        {/* Invoicer milestone */}
        <Reveal delay={220} className="lg:col-span-5">
          <a
            href={invoicer.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bento bento-hover group block h-full min-h-56 overflow-hidden border-transparent bg-gradient-primary p-7 text-primary-foreground md:p-8"
          >
            <div className="relative z-10 max-w-[52%] sm:max-w-[46%]">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-primary-foreground/70">
                Invoicer · Milestone
              </p>
              <p className="display mt-4 text-[clamp(2rem,3.4vw,2.8rem)]">₹150/mo</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                First paying customer for the invoice app I built for shop owners.
              </p>
            </div>
            <img
              src={invoicer.image}
              alt=""
              loading="eager"
              className="absolute -bottom-10 -right-16 w-[58%] rotate-[-5deg] rounded-xl border border-primary-foreground/20 shadow-2xl transition-transform duration-700 [transition-timing-function:var(--ease-out-soft)] group-hover:-translate-y-2 group-hover:rotate-[-3deg]"
            />
          </a>
        </Reveal>

        {/* Quick facts */}
        <div className="grid grid-cols-2 gap-3 lg:col-span-12 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={300 + i * 70}>
              <a href={f.href} className="bento bento-hover flex h-full flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[0.95rem] font-medium leading-snug tracking-tight sm:text-base">{f.title}</span>
                  <span className="block text-sm text-muted-foreground">{f.text}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
