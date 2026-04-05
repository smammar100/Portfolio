import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogsSection } from "@/components/BlogsSection";
import { LazyShader } from "@/components/LazyShader";

export default function BlogPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        <div className="mx-auto md:max-w-3xl">
          <Navbar />
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto md:max-w-3xl">
          <div className="section-divider" />
          <BlogsSection />
          <div className="section-divider" />
          <Footer />
          <div className="section-divider" />
          <div className="border-x border-[var(--edge)] p-2">
            <LazyShader className="h-40" />
          </div>
        </div>
      </main>
    </>
  );
}
