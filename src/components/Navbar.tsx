"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/books", label: "Books" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-14 bg-background",
        "px-2 pt-2 pb-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-3xl items-center justify-between",
          "h-full"
        )}
      >
        {/* Left — Logo */}
        <Link href="/" className="font-heading font-bold text-lg">
          DJ
        </Link>

        {/* Center — Nav links (hidden on mobile) */}
        <div className="flex items-center gap-4 text-sm max-sm:hidden">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "transition-colors duration-200",
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Moon size={18} />
              ) : (
                <Sun size={18} />
              )
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Mobile menu button */}
          <button className="text-muted-foreground hover:text-foreground sm:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
}
