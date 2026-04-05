import { cn } from "@/lib/utils";

export function QuoteSection() {
  return (
    <section className={cn("relative py-12 px-4 text-center border-x border-[var(--edge)]")}>
      {/* Opening quote mark */}
      <span
        className="block text-4xl text-muted-foreground/60 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote text */}
      <blockquote className="mx-auto max-w-2xl">
        <p className="text-lg italic text-foreground/85 md:text-xl">
          I was not born with a whole lot of natural talent&hellip; but I work
          hard and I never give up.
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <hr className="w-12 border-border" />
        <span className="text-sm uppercase tracking-widest text-muted-foreground">
          Rock Lee
        </span>
        <hr className="w-12 border-border" />
      </div>
    </section>
  );
}
