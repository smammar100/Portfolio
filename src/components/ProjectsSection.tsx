import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: "Tatva",
    date: "01.2026",
    description:
      "\u0924\u0924\u094D\u0924\u094D\u0935 (Tatva) is a digital space to explore India\u2019s ancient scriptures through a modern lens. It\u2019s built for seekers who want to read, reflect, and understand timeless wisdom without barriers.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Supabase"],
    image: "/projects/tatva.png",
    liveLink: "https://tatva.info",
    githubLink: "https://github.com/JDhruv14/tatva",
  },
  {
    title: "Sarathi.AI",
    date: "10.2025",
    description:
      "An AI guide rooted in the Bhagavad Gita, designed to answer life\u2019s questions with philosophical depth and contextual understanding. Fine-tuned on a custom dataset, it blends modern LLM capabilities with timeless spiritual insight.",
    tags: ["Python", "Unsloth.AI", "Gradio"],
    image: "/projects/sarathi.ai.png",
    liveLink: "https://huggingface.co/spaces/JDhruv14/Sarathi.AI",
    githubLink: "https://huggingface.co/JDhruv14/Qwen2.5-3B-Gita-FT",
  },
  {
    title: "Sarvam-MCP",
    date: "06.2025",
    description:
      "A powerful bridge for agentic AI workflows, enabling seamless tool integration across platforms like Claude, Gemini, and OpenAI. Built to simplify how AI systems interact, extend, and collaborate in real-world applications.",
    tags: ["Python", "FastMCP", "Docker"],
    image: "/projects/sarvam_mcp.png",
    githubLink: "https://github.com/JDhruv14/Sarvam-MCP",
  },
  {
    title: "Water Portability Predictor",
    date: "03.2025",
    description:
      "A data-driven system that evaluates water quality and predicts potability using machine learning. It turns raw chemical data into actionable insights, showcasing the power of ML in solving real-world problems.",
    tags: ["Python", "Pandas", "Scikit-learn", "Numpy", "Streamlit"],
    image: "/projects/water.png",
    githubLink: "https://github.com/JDhruv14/Water-Potability-Prediction",
  },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      {/* Image */}
      <div className="overflow-hidden rounded-lg border border-border">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={340}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full object-cover aspect-[16/9]"
        />
      </div>

      {/* Title + Date */}
      <div className="mt-3 flex items-baseline justify-between">
        <h3 className="font-semibold text-base text-foreground">
          {project.title}
        </h3>
        <span className="text-sm text-muted-foreground shrink-0">
          {project.date}
        </span>
      </div>

      {/* Description */}
      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action links */}
      <div className="mt-3 flex items-center gap-2">
        {project.liveLink && (
          <Link
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            Live link
          </Link>
        )}
        {project.githubLink && (
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
          >
            GitHub <GitHubIcon className="size-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const rows = Array.from(
    { length: Math.ceil(projects.length / 2) },
    (_, i) => projects.slice(i * 2, i * 2 + 2)
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
            Projects
          </h1>
        </header>

        <div className="px-4 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Projects I&apos;ve built along the way, shaped by curiosity, AI, and
            a focus on building things that actually work and mean something.
          </p>
        </div>
      </section>

      {/* Project Rows */}
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
              {pair.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </div>
      ))}
    </>
  );
}
