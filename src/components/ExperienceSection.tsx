"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceEntry {
  company: string;
  href?: string;
  title: string;
  employmentType: string;
  dateRange: string;
  description: string;
  badges: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Exxat",
    href: "https://exxat.com",
    title: "Backend Developer Intern",
    employmentType: "Internship",
    dateRange: "01.2026 – 04.2026",
    description:
      "Engineered an API key management system for ExxatPrism and implemented a YARP-based gateway to securely expose internal APIs. Additionally, developed an automation script to enable efficient end-to-end testing of the platform.",
    badges: ["C#", "ASP.NET Core", "YARP", "SQL Server", "JavaScript", "Playwright"],
  },
  {
    company: "Exxat",
    href: "https://exxat.com",
    title: "Developer Intern",
    employmentType: "Summer Internship",
    dateRange: "04.2025 – 5.2025",
    description:
      "Developed two remote MCP servers: a Helpdesk ticketing server enabling creation of support tickets and a CRUD server for Exxat\u2019s testing APIs, both accessible via MCP clients like OpenAI Playground and Claude Desktop.",
    badges: ["Python", "FastMCP", "Docker", "ngrok", "OpenAI"],
  },
];

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" opacity={0.4} />
    </svg>
  );
}

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>(() =>
    Object.fromEntries(experiences.map((_, i) => [i, true]))
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
          Experience
        </h2>
      </header>

      {/* Entries */}
      <div className="space-y-4 px-4 pb-4">
        {experiences.map((exp, i) => (
          <div key={i}>
            {/* Company name with bullet */}
            <div className="flex items-center gap-2">
              <span className="text-foreground text-lg leading-none">&bull;</span>
              <h3 className="font-semibold text-foreground">
                {exp.href ? (
                  <Link
                    href={exp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  exp.company
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
                  <CodeIcon className="size-4 shrink-0 text-muted-foreground" />
                  <h4 className="font-semibold text-base text-muted-foreground">
                    {exp.title}
                  </h4>
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
                  <div className="px-3 pb-3 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <span>{exp.employmentType}</span>
                      <span className="mx-2 text-muted-foreground/50">|</span>
                      {exp.dateRange}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech badges */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {exp.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
