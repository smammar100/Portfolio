"use client";

import Link from "next/link";
import { Search, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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
        <div className="flex items-center gap-4 text-sm text-muted-foreground max-sm:hidden">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <Link href="/projects" className="hover:text-foreground">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <Link href="/books" className="hover:text-foreground">
            Books
          </Link>
        </div>

        {/* Right — Actions */}
        <div className="flex items-center gap-2">
          {/* Search button (hidden on mobile) */}
          <button
            className={cn(
              "flex items-center gap-2 rounded-lg border border-border",
              "px-3 py-1.5 text-sm text-muted-foreground",
              "max-sm:hidden"
            )}
          >
            <Search size={14} />
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
              Ctrl
            </kbd>
            <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs">
              K
            </kbd>
          </button>

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
