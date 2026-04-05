"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BlogPost {
  title: string;
  date: string;
  tags: string[];
  image: string;
  href: string;
}

const posts: BlogPost[] = [
  {
    title: "Who Is Dhruv Jaradi (So Far)",
    date: "18.01.2026",
    tags: ["general", "personal"],
    image: "/blogs/who-is-dhruv.png",
    href: "https://medium.com/@jdhruv14/who-is-dhruv-jaradi-so-far-b2ae336abc29",
  },
  {
    title: "Death: The Beginning Or The End?",
    date: "02.01.2025",
    tags: ["general", "life", "philosophy", "thoughts"],
    image: "/blogs/death-beginning-end.jpg",
    href: "https://medium.com/@jdhruv14/death-the-beginning-or-the-end-dd0fa89c8f85",
  },
  {
    title: "Perfect Days: Joy Of Little Things",
    date: "02.01.2025",
    tags: ["general", "thoughts", "movies"],
    image: "/blogs/perfect-days.jpg",
    href: "https://medium.com/@jdhruv14/perfect-days-joy-of-little-things-b3fb1e70061e",
  },
];

const allTags = ["All", "General", "Personal", "Life", "Philosophy", "Thoughts", "Movies"];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col"
    >
      <div className="overflow-hidden rounded-lg border border-border">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={340}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full object-cover aspect-[16/9] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-3 flex items-baseline justify-between gap-2">
        <h3 className="font-semibold text-base text-foreground group-hover:underline">
          {post.title}
        </h3>
        <span className="text-sm text-muted-foreground shrink-0">
          {post.date}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function BlogsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? posts
      : posts.filter((p) =>
          p.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase())
        );

  const rows = Array.from(
    { length: Math.ceil(filtered.length / 2) },
    (_, i) => filtered.slice(i * 2, i * 2 + 2)
  );

  return (
    <>
      {/* Header */}
      <section
        className={cn(
          "relative screen-line-before screen-line-after",
          "border-x border-[var(--edge)]"
        )}
      >
        <header className="px-4 py-3">
          <h1 className="font-heading font-bold text-2xl text-foreground">
            Blogs
          </h1>
        </header>

        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            A collection of articles on development, design, and ideas.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="section-divider" />
      <section
        className={cn(
          "relative screen-line-before screen-line-after",
          "border-x border-[var(--edge)]"
        )}
      >
        <div className="px-4 py-3 flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Filter:</span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={cn(
                "rounded-md border px-2 py-0.5 text-xs transition-colors",
                activeFilter === tag
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-secondary text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Rows */}
      {rows.map((pair, rowIdx) => (
        <div key={rowIdx}>
          <div className="section-divider" />
          <section
            className={cn(
              "relative screen-line-before screen-line-after",
              "border-x border-[var(--edge)]"
            )}
          >
            <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {pair.map((post) => (
                <BlogCard key={post.title} post={post} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
