"use client";

import { cn } from "@/lib/utils";

function PixelCat() {
  return (
    <svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted-foreground"
      aria-label="Pixel cat"
    >
      {/* Ears */}
      <rect x="8" y="0" width="4" height="4" fill="currentColor" />
      <rect x="20" y="0" width="4" height="4" fill="currentColor" />
      {/* Head */}
      <rect x="4" y="4" width="24" height="4" fill="currentColor" />
      <rect x="4" y="8" width="24" height="4" fill="currentColor" />
      {/* Eyes */}
      <rect x="8" y="8" width="4" height="4" fill="var(--background)" />
      <rect x="20" y="8" width="4" height="4" fill="var(--background)" />
      {/* Body */}
      <rect x="0" y="12" width="32" height="4" fill="currentColor" />
      <rect x="0" y="16" width="36" height="4" fill="currentColor" />
      <rect x="0" y="20" width="40" height="4" fill="currentColor" />
      <rect x="4" y="24" width="40" height="4" fill="currentColor" />
      {/* Legs */}
      <rect x="4" y="28" width="8" height="4" fill="currentColor" />
      <rect x="28" y="28" width="8" height="4" fill="currentColor" />
      {/* Tail */}
      <rect x="40" y="16" width="4" height="4" fill="currentColor" />
      <rect x="44" y="12" width="4" height="4" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className={cn(
        "relative border-x border-[var(--edge)]"
      )}
    >
      <div className="flex items-center justify-between px-4 py-4">
        <div className="text-sm text-muted-foreground">
          <p>&copy; 2026 JDhruv14</p>
          <p>Built with love, LLMs and Coffee</p>
        </div>
        <PixelCat />
      </div>
    </footer>
  );
}
