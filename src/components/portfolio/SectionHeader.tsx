import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeader({
  number,
  label,
  title,
  children,
}: {
  number: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
      <div>
        <p className="eyebrow">
          <span className="text-primary">{number}</span> · {label}
        </p>
        <h2 className="section-title mt-3 max-w-3xl text-balance">{title}</h2>
      </div>
      {children && <p className="max-w-md leading-relaxed text-muted-foreground md:pb-1.5">{children}</p>}
    </Reveal>
  );
}
