import { Compass, Hammer, ShoppingBag } from "lucide-react";
import { INTERESTS, PILLARS } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const ICONS = [ShoppingBag, Compass, Hammer];

export function Marquee() {
  const items = [...INTERESTS, ...INTERESTS];
  return (
    <div className="marquee-mask mt-14 overflow-hidden border-y border-border py-5" aria-label="Areas I'm interested in">
      <div className="animate-marquee flex w-max items-center gap-8">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap text-xl tracking-tight text-muted-foreground md:text-2xl">
            <span className={i % 3 === 1 ? "serif-accent text-foreground" : ""}>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
      <SectionHeader
        number="01"
        label="About"
        title={
          <>
            I'm curious about how businesses work, why people buy, and{" "}
            <span className="serif-accent text-primary">how ideas become products.</span>
          </>
        }
      >
        My learning hasn't been limited to classrooms. I've worked on e-commerce listings and
        pricing, analyzed performance, and used AI tools to build web apps around different ideas.
      </SectionHeader>

      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {PILLARS.map((p, i) => {
          const Icon = ICONS[i] ?? Compass;
          return (
            <Reveal key={p.title} delay={i * 90}>
              <div className="bento bento-hover h-full p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-2xl font-medium tracking-tight">
                  {p.title.split(" ")[0]}{" "}
                  <span className="serif-accent">{p.title.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
