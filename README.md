# Portfolio

A personal portfolio website built with Next.js 16, Tailwind CSS v4, and shadcn/ui. Features dark/light theme, GSAP animations, Three.js shader effects, and a fully responsive design.

**Live:** Deployed on Vercel

## Tech Stack

- **Framework:** Next.js 16 (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **UI Components:** shadcn/ui + Radix primitives
- **Animations:** GSAP (3D book hover effect)
- **3D Graphics:** Three.js via react-three-fiber (footer shader)
- **Fonts:** PP Mondwest (headings), Geist Sans/Mono (body)

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
git clone https://github.com/smammar100/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── projects/page.tsx     # Projects page
│   ├── blog/page.tsx         # Blog page
│   ├── books/page.tsx        # Books page
│   ├── layout.tsx            # Root layout (fonts, theme)
│   └── globals.css           # Design tokens, theme, fonts
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── ProfileHero.tsx       # Hero section with animated tagline
│   ├── AboutSection.tsx      # About me
│   ├── ConnectSection.tsx    # Social links (GitHub, LinkedIn, X, etc.)
│   ├── GitHubActivity.tsx    # GitHub contribution display
│   ├── ExperienceSection.tsx # Work experience
│   ├── EducationSection.tsx  # Education history
│   ├── QuoteSection.tsx      # Quote display
│   ├── ProjectsSection.tsx   # Project cards with tags and links
│   ├── BlogsSection.tsx      # Blog posts with filter tags
│   ├── BooksSection.tsx      # Book cards with 3D GSAP hover effect
│   ├── Footer.tsx            # Footer with pixel cat
│   ├── Shader8.tsx           # Three.js WebGL shader
│   ├── LazyShader.tsx        # Lazy-loaded shader wrapper
│   ├── ThemeProvider.tsx     # Dark/light theme provider
│   └── ui/                   # shadcn/ui primitives
├── lib/
│   └── utils.ts              # Utility functions (cn)
public/
├── fonts/                    # PP Mondwest woff2 files
├── images/                   # Profile and misc images
├── projects/                 # Project thumbnail images
├── blogs/                    # Blog post images
├── books/                    # Book cover images
└── videos/                   # Video assets
```

## How to Customize

### Personal Info

- **Name & tagline:** Edit `src/components/ProfileHero.tsx` — update the `TAGLINES` array and name text
- **About text:** Edit `src/components/AboutSection.tsx`
- **Social links:** Edit `src/components/ConnectSection.tsx` — update URLs for GitHub, LinkedIn, X, email, blog
- **Footer:** Edit `src/components/Footer.tsx`

### Content Pages

- **Projects:** Edit `src/components/ProjectsSection.tsx` — modify the project objects (title, description, tags, image, links)
- **Blog posts:** Edit `src/components/BlogsSection.tsx` — modify the blog post objects and filter tags
- **Books:** Edit `src/components/BooksSection.tsx` — modify book entries per category (Reading, Read, To Read)

### Experience & Education

- **Work experience:** Edit `src/components/ExperienceSection.tsx`
- **Education:** Edit `src/components/EducationSection.tsx`

### Theming

- **Colors & tokens:** Edit `src/app/globals.css` — CSS variables under `:root` (light) and `.dark` selectors
- **Fonts:** Replace files in `public/fonts/` and update `@font-face` declarations in `globals.css`

### Images

Replace the corresponding files in `public/`:

| Asset Type | Directory | Format |
|---|---|---|
| Profile photo | `public/images/` | PNG |
| Project thumbnails | `public/projects/` | PNG/JPG |
| Blog images | `public/blogs/` | PNG/JPG |
| Book covers | `public/books/` | JPG |

### Adding a New Page

1. Create `src/app/your-page/page.tsx` following the pattern in existing pages
2. Add a nav link in `src/components/Navbar.tsx`

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run check` | Lint + typecheck + build |

## Deployment

The site is optimized for Vercel deployment. All pages are statically prerendered.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [Vercel](https://vercel.com) for automatic deployments on push.

## License

MIT
