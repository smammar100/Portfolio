import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { LazyShader } from "@/components/LazyShader";
import { PageTransition } from "@/components/motion";

export default function ProjectsPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        <div className="mx-auto md:max-w-3xl">
          <Navbar />
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto md:max-w-3xl">
          <PageTransition>
            <div className="section-divider" />
            <ProjectsSection />
            <div className="section-divider" />
            <Footer />
            <div className="section-divider" />
            <div className="border-x border-[var(--edge)] p-2">
              <LazyShader className="h-40" />
            </div>
          </PageTransition>
        </div>
      </main>
    </>
  );
}
