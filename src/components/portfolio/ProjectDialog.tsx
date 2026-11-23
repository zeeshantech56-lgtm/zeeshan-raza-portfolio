import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/data/portfolio";
import { BrowserFrame } from "./BrowserFrame";

export function ProjectDialog({
  project,
  onOpenChange,
}: {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92dvh] max-w-4xl gap-0 overflow-y-auto rounded-3xl border-border bg-background p-0 sm:rounded-3xl">
        {project && (
          <>
            <div className="border-b border-border bg-gradient-primary p-4 sm:p-8">
              <BrowserFrame src={project.image} alt={project.imageAlt} url={project.url} eager />
            </div>
            <div className="p-6 sm:p-10">
              <p className="eyebrow">
                <span className="text-primary">{project.index}</span> — {project.category}
              </p>
              <DialogTitle className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
                {project.name}
              </DialogTitle>
              <DialogDescription className="mt-3 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {project.oneLiner}
              </DialogDescription>

              {(project.milestone || project.tagline) && (
                <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-soft px-4 py-1.5 text-sm font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {project.milestone ?? project.tagline}
                </p>
              )}

              <dl className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
                {project.details.map((d) => (
                  <div key={d.label}>
                    <dt className="eyebrow">{d.label}</dt>
                    <dd className="mt-3 leading-relaxed text-foreground">{d.text}</dd>
                  </div>
                ))}
              </dl>

              {project.url && (
                <div className="mt-10">
                  <Button asChild variant="accent" size="xl">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Open live project <ArrowUpRight />
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
