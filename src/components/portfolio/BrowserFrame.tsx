import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src: string;
  alt: string;
  url?: string | undefined;
  className?: string | undefined;
  imgClassName?: string | undefined;
  eager?: boolean | undefined;
};

export function BrowserFrame({ src, alt, url, className, imgClassName, eager }: BrowserFrameProps) {
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : undefined;
  return (
    <div className={cn("browser-frame", className)}>
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        {host && (
          <span className="ml-3 truncate font-mono text-[0.65rem] tracking-wide text-muted-foreground">
            {host}
          </span>
        )}
      </div>
      <div className="project-shot overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={1440}
          height={900}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={cn("block aspect-[16/10] w-full object-cover object-top", imgClassName)}
        />
      </div>
    </div>
  );
}
