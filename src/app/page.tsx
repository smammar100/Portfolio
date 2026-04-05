import { Navbar } from "@/components/Navbar";
import { ProfileHero } from "@/components/ProfileHero";
import { AboutSection } from "@/components/AboutSection";
import { ConnectSection } from "@/components/ConnectSection";
import { GitHubActivity } from "@/components/GitHubActivity";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { QuoteSection } from "@/components/QuoteSection";
import { Footer } from "@/components/Footer";
import { LazyShader } from "@/components/LazyShader";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background">
        <div className="mx-auto md:max-w-3xl">
          <Navbar />
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto md:max-w-3xl">
          <ProfileHero />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <ConnectSection />
          <div className="section-divider" />
          <GitHubActivity />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <EducationSection />
          <div className="section-divider" />
          <QuoteSection />
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
