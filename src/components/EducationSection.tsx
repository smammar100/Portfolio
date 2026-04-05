"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface EducationEntry {
  school: string;
  href?: string;
  degree: string;
  dateRange: string;
  description: string;
}

const educationEntries: EducationEntry[] = [
  {
    school: "G H Patel Institute of Technology",
    href: "https://gcet.ac.in/",
    degree: "Bachelor of Technology \u00b7 Computer Engineering",
    dateRange: "2022 \u2013 2026",
    description:
      "I am currently pursuing my Bachelor of Technology in Computer Engineering at G H Patel Institute of Technology. I am in my final year of study and will graduate in 2026.",
  },
  {
    school: "Parth School of Science and Technology",
    degree: "State Board \u00b7 High School",
    dateRange: "2018 \u2013 2022",
    description:
      "I completed my High School education at Parth School of Science and Technology. I was a student of the Science stream.",
  },
  {
    school: "Baroda High School",
    degree: "State Board \u00b7 Junior School",
    dateRange: "2007 \u2013 2018",
    description:
      "I completed my Junior School education at Baroda High School.",
  },
];

export function EducationSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(educationEntries.map((_, i) => [i, true]))
  );

  const toggle = (index: number) =>
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));

  return (
    <section
      className={cn(
        "relative screen-line-before screen-line-after",
        "border-x border-[var(--edge)]"
      )}
    >
      {/* Header */}
      <header className="px-4 py-3">
        <h2 className="font-heading font-bold text-xl text-foreground">
          Education
        </h2>
      </header>

      {/* Entries */}
      <div className="space-y-4 px-4 pb-4">
        {educationEntries.map((entry, i) => (
          <div key={i}>
            {/* School name with bullet */}
            <div className="flex items-center gap-2">
              <span className="text-foreground text-lg leading-none">&bull;</span>
              <h3 className="font-semibold text-foreground">
                {entry.href ? (
                  <Link
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {entry.school}
                  </Link>
                ) : (
                  entry.school
                )}
              </h3>
            </div>

            {/* Expandable card */}
            <div
              className={cn(
                "mt-1 rounded-lg",
                "border border-border bg-card/80"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between px-3 py-2 text-left"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="shrink-0 text-muted-foreground" />
                  <p className="text-sm font-semibold text-muted-foreground">{entry.degree}</p>
                </div>
                {expanded[i] ? (
                  <Minus size={14} className="shrink-0 text-muted-foreground" />
                ) : (
                  <Plus size={14} className="shrink-0 text-muted-foreground" />
                )}
              </button>

              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-in-out",
                  expanded[i] ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-3 pb-3 space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {entry.dateRange}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
