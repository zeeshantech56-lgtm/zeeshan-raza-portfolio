import { useState } from "react";
import { ArrowUpRight, Mic, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROJECTS, type Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ProjectDialog } from "./ProjectDialog";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const LAYOUT: Record<string, { wide?: boolean; dark?: boolean }> = {
  invoicer: { wide: true },
  rupya: { wide: true, dark: true },
};

function ProjectCard({ project, onOpen, index }: { project: Project; onOpen: () => void; index: number }) {
  const { wide, dark } = LAYOUT[project.id] ?? {};
  return (
    <Reveal delay={(index % 3) * 90} className={cn(wide && "md:col-span-2")}>
      <article
        className={cn(
          "bento bento-hover group flex h-full flex-col overflow-hidden p-2.5",
          wide && "lg:flex-row",
          dark && "border-transparent bg-gradient-ink text-ink-foreground",
        )}
      >
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Open details for ${project.name}`}
          className={cn("relative block overflow-hidden rounded-2xl bg-secondary", wide && "lg:w-[58%] lg:shrink-0 lg:self-center")}
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-1000 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-[1.04]"
          />
          <span className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-paper text-foreground opacity-0 shadow-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Plus className="h-4 w-4" />
          </span>
        </button>

        <div className={cn("flex min-w-0 flex-1 flex-col p-4 pt-5", wide && "lg:p-7")}>
          <div className="flex items-center justify-between gap-3">
            <p className={cn("eyebrow truncate", dark && "text-ink-foreground/55")}>{project.category}</p>
            <span className={cn("font-mono text-xs", dark ? "text-ink-foreground/55" : "text-primary")}>
              {project.index}
            </span>
          </div>
          <h3 className={cn("mt-3 font-medium tracking-tight", wide ? "text-3xl md:text-4xl" : "text-2xl")}>
            {project.name}
          </h3>
          {project.tagline && (
            <p className="mt-3 flex items-center gap-2.5 text-2xl">
              <Mic className="h-5 w-5 text-ink-foreground/55" />
              <span className="serif-accent">{project.tagline}</span>
            </p>
          )}
          <p className={cn("mt-3 leading-relaxed", dark ? "text-ink-foreground/70" : "text-muted-foreground")}>
            {project.oneLiner}
          </p>
          {project.milestone && (
            <p className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {project.milestone}
            </p>
          )}
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.url && (
              <Button asChild variant={dark ? "invert" : "hero"} size="pill">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Live site <ArrowUpRight />
                </a>
              </Button>
            )}
            <Button variant={dark ? "invert-outline" : "quiet"} size="pill" onClick={onOpen}>
              Details
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-y border-border bg-paper/60 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          number="03"
          label="Projects"
          title={
            <>
              Things I've built, <span className="serif-accent text-primary">all live.</span>
            </>
          }
        >
          {PROJECTS.length} web apps and websites, built with AI-powered tools. Open any card to see
          the problem, the idea and my approach.
        </SectionHeader>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>
      </div>

      <ProjectDialog project={active} onOpenChange={(o) => !o && setActive(null)} />
    </section>
  );
}
