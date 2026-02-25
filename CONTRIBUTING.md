# Contributing to Sniprl

Thank you for your interest in contributing! Here's how to get started.

## Quick Start

1. **Fork** the repository and clone your fork locally.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Copy `.env.example` (or create `.env`) with the required variables — see [README.md](README.md#3-configure-environment-variables).
4. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```
5. Start the dev server:
   ```bash
   pnpm dev
   ```

## Development Workflow

1. Create a branch off `main`:
   ```bash
   git checkout -b feat/my-feature
   ```
2. Make your changes. Keep commits focused and descriptive.
3. Run the linter before committing:
   ```bash
   pnpm lint
   ```
4. Ensure the project builds successfully:
   ```bash
   pnpm build
   ```
5. Push your branch and open a **Pull Request** against `main`.

## Pull Request Guidelines

- Provide a clear title and description of what your PR does.
- Reference any related issues (e.g. `Closes #42`).
- Keep PRs small and focused — one feature or fix per PR.
- Make sure CI checks pass before requesting review.

## Code Style

- **TypeScript** — strict mode is enabled; avoid `any` where possible.
- **Tailwind CSS** — use utility classes; avoid custom CSS unless necessary.
- **Formatting** — the project uses the default Prettier/ESLint config. Run `pnpm lint` to check.

## Reporting Bugs

Open an [issue](https://github.com/emon5122/url-handler/issues) with:

- A concise title and description.
- Steps to reproduce the bug.
- Expected vs. actual behaviour.
- Browser/OS/Node version if relevant.

## Suggesting Features

Open an issue with the **feature request** label. Describe the use case and any proposed API or UI changes.

## Code of Conduct

Be respectful and constructive. Harassment or abusive behaviour will not be tolerated.

---

Thanks for helping make Sniprl better!
