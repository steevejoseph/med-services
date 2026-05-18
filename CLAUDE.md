# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
**Global Enterprise Solutions & Services LLC** — a medical device delivery service (think Uber for medical supplies/devices, serving hospitals and health providers). The website's primary purpose is as a credential showcase: when pitching to hospitals, the client directs them to the site to verify credentials.

## Commands

This is a greenfield Next.js project. Once initialized with `npx create-next-app@latest`, typical commands will be:

```bash
npm run dev      # start development server
npm run build    # production build
npm run lint     # lint
```

## Architecture

Next.js App Router (`app/` directory). Four main routes:

| Route | Purpose |
|---|---|
| `/` | Homepage — company intro, value proposition |
| `/certificates` | Certifications and compliance credentials |
| `/resume` | Owner/operator resume/background |
| `/employees` | Team listing (Imran, Binti Imran) |

## Deployment

Primary: Vercel. Build the app to be **deployment-agnostic** so it can be migrated if needed:
- No Vercel-specific APIs or edge runtime dependencies
- Include a `Dockerfile` for containerized deployment as an alternative
- Use standard Next.js `output: 'standalone'` in `next.config.ts` (works with Docker)

## Content Status

The non-home routes currently have no real content — build them with **clearly marked placeholder sections** so the client can hand over content later:

| Route | Known content | Placeholder needed |
|---|---|---|
| `/certificates` | None yet | Placeholder cards/list for cert names, issuing body, expiry |
| `/resume` | None yet | Placeholder sections for experience, education, skills |
| `/employees` | Names: Imran, Binti Imran | Placeholder for title, bio, photo per employee |

Use a consistent "Coming soon / content to be added" pattern so the site looks intentional, not incomplete, when shown to potential hospital clients.

## Business Context

- Target audience: hospital procurement and compliance officers evaluating a vendor
- The site must instill trust quickly — credentials, professionalism, and legitimacy are the priority
- Content sections map to the three things a hospital asks for before onboarding a delivery vendor: certifications, operator background, and staff
