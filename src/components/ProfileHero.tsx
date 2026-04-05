"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback } from "react";
import { Shader8 } from "@/components/Shader8";

const TAGLINES = ["Trying to do better", "22 \u00b7 Engineer", "Always Learning"];

export function ProfileHero({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % TAGLINES.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const triggerGlitch = useCallback(() => {
    if (glitching) return;
    setGlitching(true);
    setTimeout(() => setGlitching(false), 520);
  }, [glitching]);
  return (
    <section
      className={cn(
        "relative screen-line-before screen-line-after",
        className
      )}
    >
      <div className="section-divider" />
      {/* Dot pattern area */}
      <div className="relative border-x border-[var(--edge)] p-2">
        <Shader8 className="h-[120px]" />
      </div>

      <div className="section-divider" />
      {/* Profile card */}
      <div className="border-x border-[var(--edge)] flex flex-row gap-4 p-4">
        {/* Avatar with glitch effect */}
        <button
          type="button"
          className="shrink-0"
          onClick={triggerGlitch}
          onMouseEnter={triggerGlitch}
        >
          <div
            className="avatar-glitch relative size-[118px] overflow-hidden rounded-lg border-2 border-[var(--edge)] bg-secondary"
            data-glitching={glitching}
          >
            <div className="avatar-glitch__trigger relative aspect-square h-auto w-full">
              <Image
                src="/images/pfp1.png"
                alt="Avatar"
                width={118}
                height={118}
                className="h-full w-full select-none rounded-[6px] object-cover"
                priority
              />
            </div>
            <span className="avatar-glitch__scanlines pointer-events-none absolute inset-0 rounded-[6px]" />
            <span className="avatar-glitch__rgb pointer-events-none absolute inset-0 rounded-[6px]" />
          </div>
        </button>

        {/* Info area */}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          {/* Top row: info icon + view count */}
          <div className="flex items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 text-muted-foreground"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>

            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              10,381
            </span>
          </div>

          {/* Name + verified badge */}
          <h1 className="flex items-center gap-1.5 font-heading font-black text-[30px] leading-tight tracking-normal text-foreground">
            Dhruv Jaradi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 shrink-0 text-info"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.534L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </h1>

          {/* Cycling tagline */}
          <p className="font-mono text-sm leading-snug text-muted-foreground">
            <span className="inline-flex min-h-[1.25rem] min-w-[18ch] overflow-hidden">
              <span
                className={cn(
                  "inline-block whitespace-pre-wrap transition-all duration-300",
                  visible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                )}
              >
                {TAGLINES[index]}
              </span>
            </span>
          </p>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Coding &middot; Cooking something
          </div>
        </div>
      </div>
    </section>
  );
}
