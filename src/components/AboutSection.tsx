import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section
      className={cn(
        "relative screen-line-before screen-line-after",
        "border-x border-[var(--edge)]"
      )}
    >
      {/* Header */}
      <header className="px-4 py-3">
        <h2 className="font-heading font-bold text-xl text-foreground">About</h2>
      </header>

      {/* Content */}
      <div className="px-4 pb-4 prose">
        <ul className="list-disc space-y-3 pl-5">
          <li className="text-sm text-muted-foreground leading-relaxed sm:text-base">
            I&apos;m a builder who&apos;s still figuring things out, but doing
            it by creating along the way. I enjoy working at the intersection of
            AI and real world impact, whether it&apos;s building systems,
            experimenting with LLMs, or turning ideas into something real.
          </li>
          <li className="text-sm text-muted-foreground leading-relaxed sm:text-base">
            At my core, I&apos;m curious, not just about technology, but about
            how it shapes the way people think, act, and grow. That curiosity
            pushes me beyond just coding, into exploring meaning and purpose.
          </li>
          <li className="text-sm text-muted-foreground leading-relaxed sm:text-base">
            I don&apos;t see growth as just skills or achievements, but as
            becoming more aware, disciplined, and aligned with what I&apos;m
            doing, and that&apos;s something I&apos;m continuously working on.
          </li>
        </ul>

      </div>
    </section>
  );
}
