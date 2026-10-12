# Jahid Sami Portfolio

A modern portfolio website for Jahid Sami, a Junior Frontend Developer based in Dhaka, Bangladesh.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI components
- Prisma with SQLite
- Framer Motion

## Portfolio Content

Portfolio content is centralized in `src/lib/portfolio-data.ts` and used across the public pages, metadata, API defaults, and seed data.

Public resume download:

```text
public/Jahid_Uddin_Sami_Resume.docx
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npx tsc --noEmit
```

The development server runs on port 3004:

```bash
npm run dev
```

## Project Structure

```text
src/
  app/          Next.js routes, pages, and API handlers
  components/   Shared React components and UI primitives
  hooks/        Custom React hooks
  lib/          Utilities, Prisma client, and portfolio data
public/         Static images and the public resume file
prisma/         Prisma schema and seed script
```

## Contact

- Email: engineerjahidsami@gmail.com
- Phone: +880-1752868876
- Location: Dhaka, Bangladesh
- GitHub: https://github.com/jahidsami985
- LinkedIn: https://www.linkedin.com/in/jahid-uddin-sami-4b52823a1/

## Author

Jahid Sami
