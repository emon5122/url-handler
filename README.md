<p align="center">
  <img src="public/logo.svg" width="80" alt="Sniprl logo" />
</p>

<h1 align="center">Sniprl</h1>

<p align="center">
  <strong>Open-source URL shortener — shorten, share &amp; track links instantly.</strong>
</p>

<p align="center">
  <a href="https://url.nexisltd.com">Live Demo</a> · <a href="#getting-started">Getting Started</a> · <a href="CONTRIBUTING.md">Contributing</a> · <a href="LICENSE">License</a>
</p>

---

## Features

- **Instant shortening** — paste a URL, get a short link in milliseconds
- **Click analytics** — real-time view count tracking on every link
- **Smart downloads** — auto-converts Google Drive, Dropbox & Mega links to direct downloads
- **Dashboard** — manage, inspect & delete all your links in one place
- **OAuth sign-in** — Google & GitHub authentication via NextAuth.js
- **SEO ready** — Open Graph, JSON-LD, sitemap, and `robots.txt` out of the box
- **Responsive** — fully mobile-first design with Tailwind CSS v4

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | [TypeScript 5.9](https://www.typescriptlang.org) |
| UI | [Tailwind CSS 4](https://tailwindcss.com) · [shadcn/ui](https://ui.shadcn.com) · [Framer Motion](https://www.framer.com/motion) |
| Database | PostgreSQL via [Prisma 7](https://www.prisma.io) (with `@prisma/adapter-pg`) |
| Auth | [NextAuth.js 4](https://next-auth.js.org) (Google + GitHub providers) |
| Data fetching | [TanStack Query 5](https://tanstack.com/query) · [Axios](https://axios-http.com) |
| Hosting | [Vercel](https://vercel.com) |

## Getting Started

### Prerequisites

- **Node.js** ≥ 20.19
- **pnpm** (recommended) or npm/yarn
- **PostgreSQL** database (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or local)

### 1. Clone the repo

```bash
git clone https://github.com/emon5122/url-handler.git
cd url-handler
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file at the project root:

```env
# Database
POSTGRES_PRISMA_URL="postgresql://user:password@host:5432/dbname"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-random-secret"

# OAuth — Google
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# OAuth — GitHub
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
```

### 4. Generate Prisma client & run migrations

```bash
npx prisma generate
npx prisma migrate deploy
```

### 5. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── prisma/                 # Prisma schema & migrations
├── prisma.config.ts        # Prisma 7 config (datasource URL)
├── public/                 # Static assets (logo, favicon, robots.txt)
├── src/
│   ├── app/                # Next.js App Router pages & API routes
│   │   ├── api/            # REST endpoints (url CRUD, auth)
│   │   ├── dashboard/      # User dashboard
│   │   ├── d/[id]/         # Redirect handler
│   │   ├── privacy/        # Privacy policy
│   │   └── terms/          # Terms of service
│   ├── components/         # React components (header, footer, ui/)
│   ├── context/            # Providers (auth, query)
│   ├── generated/          # Prisma generated client (git-ignored)
│   ├── lib/                # Utilities (prisma client, email, utils)
│   └── types/              # TypeScript type definitions
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server with hot reload |
| `pnpm build` | Generate Prisma client & production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm prisma:generate` | Regenerate Prisma client |

## Deployment

The project is configured for **Vercel** out of the box. The `vercel-build` script runs Prisma generate, applies migrations, and builds the app.

Set the environment variables listed above in your Vercel project settings.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

## Security

If you discover a vulnerability, please see [SECURITY.md](SECURITY.md) for responsible disclosure instructions.

## License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built by <a href="https://nexisltd.com">Nexis LTD</a>
</p>
