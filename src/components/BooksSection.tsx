"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { BookOpen, BookCheck, BookPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

interface Book {
  title: string;
  author: string;
  image: string;
}

interface BookCategory {
  label: string;
  icon: React.ReactNode;
  books: Book[];
}

const categories: BookCategory[] = [
  {
    label: "Reading",
    icon: <BookOpen className="size-4" />,
    books: [
      {
        title: "The Gita for Gen Z",
        author: "Rania Sen",
        image: "/books/gita-gen-z.jpg",
      },
    ],
  },
  {
    label: "Read",
    icon: <BookCheck className="size-4" />,
    books: [
      {
        title: "My Gita",
        author: "Devdutt Pattanaik",
        image: "/books/my-gita.jpg",
      },
      {
        title: "Days at the Morisaki Bookshop",
        author: "Satoshi Yagisawa",
        image: "/books/morisaki-bookshop.jpg",
      },
    ],
  },
  {
    label: "To Read",
    icon: <BookPlus className="size-4" />,
    books: [
      {
        title: "More Days at the Morisaki Bookshop",
        author: "Yoko Ogawa",
        image: "/books/more-morisaki.jpg",
      },
      {
        title: "The Almanack of Naval Ravikant",
        author: "Eric Jorgenson",
        image: "/books/naval-almanack.jpg",
      },
    ],
  },
];

function BookCard({ book }: { book: Book }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (!containerRef.current) return;

    const cover = containerRef.current.querySelector<HTMLElement>(".book-cover-image");
    const effect = containerRef.current.querySelector<HTMLElement>(".book-spine-effect");
    const light = containerRef.current.querySelector<HTMLElement>(".book-light");
    const pages = containerRef.current.querySelectorAll<HTMLElement>(".book-page");

    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(
      cover,
      {
        duration: 0.7,
        rotateY: -12,
        translateX: -6,
        scaleX: 0.96,
        boxShadow:
          "10px 10px 20px rgba(0,0,0,0.25), 20px 20px 40px rgba(0,0,0,0.2), 40px 40px 60px rgba(0,0,0,0.15)",
        ease: "power2.out",
      },
      0
    );

    tl.to(
      effect,
      {
        duration: 0.7,
        marginLeft: 10,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      light,
      {
        duration: 0.7,
        opacity: 0.2,
        rotateY: -12,
        ease: "power2.out",
      },
      0
    );

    if (pages.length) {
      tl.to(pages[0], { x: "4px", duration: 0.7, ease: "power1.inOut" }, 0);
      tl.to(pages[1], { x: "2px", duration: 0.7, ease: "power1.inOut" }, 0);
      tl.to(pages[2], { x: "0px", duration: 0.7, ease: "power1.inOut" }, 0);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return;

    const cover = containerRef.current.querySelector<HTMLElement>(".book-cover-image");
    const effect = containerRef.current.querySelector<HTMLElement>(".book-spine-effect");
    const light = containerRef.current.querySelector<HTMLElement>(".book-light");
    const pages = containerRef.current.querySelectorAll<HTMLElement>(".book-page");

    if (tlRef.current) {
      tlRef.current.kill();
    }

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(
      cover,
      {
        duration: 0.5,
        rotateY: 0,
        translateX: 0,
        scaleX: 1,
        boxShadow:
          "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)",
        ease: "power2.out",
      },
      0
    );

    tl.to(
      effect,
      {
        duration: 0.5,
        marginLeft: 16,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      light,
      {
        duration: 0.5,
        opacity: 0.1,
        rotateY: 0,
        ease: "power2.out",
      },
      0
    );

    if (pages.length) {
      tl.to(pages[0], { x: "0px", duration: 0.5, ease: "power1.inOut" }, 0);
      tl.to(pages[1], { x: "0px", duration: 0.5, ease: "power1.inOut" }, 0);
      tl.to(pages[2], { x: "0px", duration: 0.5, ease: "power1.inOut" }, 0);
    }
  }, []);

  return (
    <div className="screen-line-before screen-line-after p-3">
      <div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[200px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 3D Book Container */}
        <div className="relative" style={{ perspective: "2000px" }}>
          {/* Back Cover */}
          <div
            className="absolute rounded-r-[6px]"
            style={{
              width: "96%",
              height: "96%",
              top: "2%",
              left: "2%",
              background: "#111",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.4)",
              zIndex: -10,
            }}
          />

          {/* Pages */}
          <div
            className="absolute"
            style={{
              width: "90%",
              height: "94%",
              top: "3%",
              left: "5%",
              zIndex: 0,
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="book-page absolute top-0 right-0 rounded-r-[6px]"
                style={{
                  width: "98%",
                  height: "100%",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.2)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  transformOrigin: "right center",
                  zIndex: -5,
                }}
              />
            ))}
          </div>

          {/* Front Cover */}
          <div
            className="book-cover-image relative rounded-[2px_6px_6px_2px] cursor-pointer"
            style={{
              lineHeight: 0,
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.15), 0 30px 45px rgba(0,0,0,0.12), 0 60px 80px rgba(0,0,0,0.1)",
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              willChange: "transform",
              zIndex: 10,
            }}
          >
            <Image
              src={book.image}
              alt={book.title}
              width={400}
              height={600}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="w-full rounded-[2px_6px_6px_2px]"
              style={{ aspectRatio: "2/3", objectFit: "cover" }}
            />

            {/* Spine effect */}
            <div
              className="book-spine-effect pointer-events-none absolute top-0"
              style={{
                width: "20px",
                height: "100%",
                marginLeft: "16px",
                borderLeft: "2px solid rgba(0,0,0,0.06)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
                transformOrigin: "left center",
                zIndex: 5,
              }}
            />

            {/* Light overlay */}
            <div
              className="book-light pointer-events-none absolute inset-0 rounded-[2px_6px_6px_2px]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 100%)",
                opacity: 0.1,
                transformOrigin: "left center",
                zIndex: 4,
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="mt-3 text-center">
          <p className="text-sm leading-snug font-semibold text-foreground">
            {book.title}
          </p>
          <p className="text-xs text-muted-foreground">{book.author}</p>
        </div>
      </div>
    </div>
  );
}

export function BooksSection() {
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
            Books
          </h1>
        </header>

        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed text-balance">
            A collection of books that made me pause, think, and see things
            differently. Some for growth, some for curiosity, and some that just
            stayed with me.
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category) => (
        <div key={category.label}>
          <div className="section-divider" />
          <section
            className={cn(
              "relative screen-line-before screen-line-after",
              "border-x border-[var(--edge)]"
            )}
          >
            <div className="flex items-center gap-2 px-4 py-2 text-foreground">
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </div>
          </section>

          <div className="section-divider" />
          <section
            className={cn(
              "relative screen-line-before screen-line-after",
              "border-x border-[var(--edge)]"
            )}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 py-4">
              {category.books.map((book) => (
                <BookCard key={book.title} book={book} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
