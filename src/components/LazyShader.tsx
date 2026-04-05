"use client";

import dynamic from "next/dynamic";

const Shader8 = dynamic(
  () => import("@/components/Shader8").then((mod) => mod.Shader8),
  { ssr: false, loading: () => <div className="h-40 bg-background" /> }
);

export function LazyShader({ className }: { className?: string }) {
  return <Shader8 className={className} />;
}
