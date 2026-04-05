"use client";

import { cn } from "@/lib/utils";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pose 0: Sitting (default) — upright, tail curled up
function CatSitting() {
  return (
    <g>
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
    </g>
  );
}

// Pose 1: Stretching — front legs extended, body elongated, tail up
function CatStretching() {
  return (
    <g>
      {/* Ears */}
      <rect x="4" y="4" width="4" height="4" fill="currentColor" />
      <rect x="16" y="4" width="4" height="4" fill="currentColor" />
      {/* Head (lower, stretched forward) */}
      <rect x="0" y="8" width="24" height="4" fill="currentColor" />
      <rect x="0" y="12" width="24" height="4" fill="currentColor" />
      {/* Eyes */}
      <rect x="4" y="12" width="4" height="4" fill="var(--background)" />
      <rect x="16" y="12" width="4" height="4" fill="var(--background)" />
      {/* Body (elongated back) */}
      <rect x="8" y="16" width="32" height="4" fill="currentColor" />
      <rect x="12" y="20" width="32" height="4" fill="currentColor" />
      {/* Front legs (extended) */}
      <rect x="0" y="16" width="4" height="4" fill="currentColor" />
      <rect x="0" y="20" width="4" height="8" fill="currentColor" />
      {/* Back legs */}
      <rect x="36" y="24" width="8" height="4" fill="currentColor" />
      {/* Tail (up high) */}
      <rect x="44" y="16" width="4" height="4" fill="currentColor" />
      <rect x="44" y="12" width="4" height="4" fill="currentColor" />
      <rect x="44" y="8" width="4" height="4" fill="currentColor" />
    </g>
  );
}

// Pose 2: Pawing — one paw raised, playful stance
function CatPawing() {
  return (
    <g>
      {/* Ears */}
      <rect x="8" y="0" width="4" height="4" fill="currentColor" />
      <rect x="20" y="0" width="4" height="4" fill="currentColor" />
      {/* Head */}
      <rect x="4" y="4" width="24" height="4" fill="currentColor" />
      <rect x="4" y="8" width="24" height="4" fill="currentColor" />
      {/* Eyes (open wide — excited) */}
      <rect x="8" y="6" width="4" height="6" fill="var(--background)" />
      <rect x="20" y="6" width="4" height="6" fill="var(--background)" />
      {/* Pupils */}
      <rect x="10" y="8" width="2" height="2" fill="currentColor" />
      <rect x="22" y="8" width="2" height="2" fill="currentColor" />
      {/* Body */}
      <rect x="0" y="12" width="32" height="4" fill="currentColor" />
      <rect x="0" y="16" width="32" height="4" fill="currentColor" />
      <rect x="0" y="20" width="36" height="4" fill="currentColor" />
      <rect x="4" y="24" width="32" height="4" fill="currentColor" />
      {/* Left paw raised */}
      <rect x="0" y="8" width="4" height="4" fill="currentColor" />
      {/* Right leg */}
      <rect x="28" y="28" width="8" height="4" fill="currentColor" />
      {/* Left leg (on ground) */}
      <rect x="4" y="28" width="8" height="4" fill="currentColor" />
      {/* Tail (wagging — angled differently) */}
      <rect x="36" y="20" width="4" height="4" fill="currentColor" />
      <rect x="40" y="24" width="4" height="4" fill="currentColor" />
      <rect x="44" y="20" width="4" height="4" fill="currentColor" />
    </g>
  );
}

// Pose 3: Sleeping — curled up, Z's
function CatSleeping() {
  return (
    <g>
      {/* Curled body */}
      <rect x="4" y="16" width="28" height="4" fill="currentColor" />
      <rect x="0" y="20" width="36" height="4" fill="currentColor" />
      <rect x="0" y="24" width="36" height="4" fill="currentColor" />
      <rect x="4" y="28" width="28" height="4" fill="currentColor" />
      {/* Head tucked in */}
      <rect x="0" y="12" width="16" height="4" fill="currentColor" />
      <rect x="0" y="16" width="4" height="4" fill="currentColor" />
      {/* Ears */}
      <rect x="0" y="8" width="4" height="4" fill="currentColor" />
      <rect x="12" y="8" width="4" height="4" fill="currentColor" />
      {/* Closed eyes (lines) */}
      <rect x="4" y="14" width="4" height="2" fill="var(--background)" />
      <rect x="10" y="14" width="4" height="2" fill="var(--background)" />
      {/* Tail wrapping around */}
      <rect x="32" y="20" width="4" height="4" fill="currentColor" />
      <rect x="36" y="16" width="4" height="4" fill="currentColor" />
      {/* Zzz */}
      <rect x="20" y="4" width="8" height="2" fill="currentColor" opacity="0.5" />
      <rect x="24" y="2" width="4" height="2" fill="currentColor" opacity="0.5" />
      <rect x="20" y="0" width="8" height="2" fill="currentColor" opacity="0.5" />
      <rect x="30" y="8" width="6" height="2" fill="currentColor" opacity="0.35" />
      <rect x="33" y="6" width="3" height="2" fill="currentColor" opacity="0.35" />
      <rect x="30" y="4" width="6" height="2" fill="currentColor" opacity="0.35" />
    </g>
  );
}

const POSES = [CatSitting, CatStretching, CatPawing, CatSleeping];

function PixelCat() {
  const [poseIndex, setPoseIndex] = useState(0);

  const randomizePose = useCallback(() => {
    setPoseIndex((prev) => {
      let next: number;
      do {
        next = Math.floor(Math.random() * POSES.length);
      } while (next === prev);
      return next;
    });
  }, []);

  const Pose = POSES[poseIndex];

  return (
    <motion.svg
      width="48"
      height="36"
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted-foreground cursor-pointer"
      aria-label="Pixel cat"
      onMouseEnter={randomizePose}
      onClick={randomizePose}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <AnimatePresence mode="wait">
        <motion.g
          key={poseIndex}
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <Pose />
        </motion.g>
      </AnimatePresence>
    </motion.svg>
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
