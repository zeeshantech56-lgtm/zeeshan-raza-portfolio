import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const year = new Date().getFullYear();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-3 pb-6 md:px-6">
      <Reveal>
        <div className="bento overflow-hidden border-transparent bg-gradient-ink p-8 text-ink-foreground md:p-14">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-foreground/55">
                05 · Contact
              </p>
              <h2 className="display mt-6 text-[clamp(2.2rem,5vw,4.25rem)] text-balance">
                Have a problem, opportunity, or idea?{" "}
                <span className="serif-accent text-primary-glow">Let's talk.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/65">
                I'm always up for conversations about business, products, growth and e-commerce —
                and roles where I can learn, contribute and build.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <Button asChild variant="invert" size="xl" className="w-full">
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail /> Email me
                </a>
              </Button>
              <Button asChild variant="invert-outline" size="xl" className="w-full">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn <ArrowUpRight />
                </a>
              </Button>
              <button
                type="button"
                onClick={copy}
                className="mt-1 inline-flex items-center justify-center gap-2 font-mono text-sm text-ink-foreground/60 transition-colors hover:text-ink-foreground"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : CONTACT.email}
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="flex flex-col gap-2 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-medium text-foreground">Zeeshan Raza</span> · Business | Product | Growth | Building
        </p>
        <p>© {year} Zeeshan Raza. All rights reserved.</p>
      </footer>
    </section>
  );
}
