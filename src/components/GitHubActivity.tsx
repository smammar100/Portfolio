import { cn } from "@/lib/utils";

function GitHubIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size ?? 24} height={size ?? 24} className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0024 12c0-6.6-5.4-12-12-12z" />
    </svg>
  );
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["Mon", "", "Wed", "", "Fri", "", ""] as const;

const LEVEL_CLASSES = [
  "bg-secondary",
  "bg-success/20",
  "bg-success/40",
  "bg-success/60",
  "bg-success",
] as const;

/** Deterministic pseudo-random level (0-4) based on column and row. */
function getLevel(col: number, row: number): number {
  const seed = (col * 7 + row) * 2654435761;
  const hash = ((seed >>> 0) ^ (seed >>> 16)) & 0xffff;
  // Skew towards lower levels so the graph looks realistic
  const n = hash % 100;
  if (n < 40) return 0;
  if (n < 60) return 1;
  if (n < 78) return 2;
  if (n < 92) return 3;
  return 4;
}

export function GitHubActivity() {
  const cols = 52;
  const rows = 7;

  return (
    <section
      className={cn(
        "relative screen-line-before screen-line-after",
        "border-x border-[var(--edge)]"
      )}
    >
      {/* Header */}
      <header className="px-4 py-3">
        <h2 className="font-heading font-bold text-xl">GitHub Activity</h2>
      </header>

      {/* Content */}
      <div className="px-4 pb-4">
        {/* Coding time indicator */}
        <div className="flex items-center gap-2">
          <GitHubIcon size={20} className="text-foreground" />
          <span className="text-sm text-muted-foreground">Coded today</span>
          <span className="text-sm font-semibold text-foreground">
            4 hrs 21 mins
          </span>
        </div>

        {/* Contribution graph */}
        <div className="mt-4 overflow-x-auto">
          <div className="inline-block">
            {/* Month labels */}
            <div
              className="grid gap-[2px]"
              style={{
                gridTemplateColumns: `24px repeat(${cols}, 10px)`,
              }}
            >
              {/* Spacer for day labels column */}
              <div />
              {Array.from({ length: cols }, (_, col) => {
                // Show month label roughly every 4.3 columns
                const monthIndex = Math.floor((col / cols) * 12);
                const prevMonthIndex =
                  col > 0 ? Math.floor(((col - 1) / cols) * 12) : -1;
                const showLabel = monthIndex !== prevMonthIndex;
                return (
                  <div key={col} className="h-3 text-xs text-muted-foreground">
                    {showLabel ? MONTHS[monthIndex] : ""}
                  </div>
                );
              })}
            </div>

            {/* Grid rows */}
            {Array.from({ length: rows }, (_, row) => (
              <div
                key={row}
                className="grid gap-[2px]"
                style={{
                  gridTemplateColumns: `24px repeat(${cols}, 10px)`,
                }}
              >
                {/* Day label */}
                <div className="flex h-[10px] items-center text-xs leading-none text-muted-foreground">
                  {DAY_LABELS[row]}
                </div>

                {/* Squares */}
                {Array.from({ length: cols }, (_, col) => {
                  const level = getLevel(col, row);
                  return (
                    <div
                      key={col}
                      className={cn(
                        "h-[10px] w-[10px] rounded-sm",
                        LEVEL_CLASSES[level]
                      )}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            213 activities in 2026
          </span>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Less</span>
            <div className="flex gap-0.5">
              {LEVEL_CLASSES.map((cls) => (
                <div
                  key={cls}
                  className={cn("h-[10px] w-[10px] rounded-sm", cls)}
                />
              ))}
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
