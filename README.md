# KeroDev Next.js Starter

> Production-ready Next.js starter with full Arabic/English RTL+LTR support, next-intl v4, Tailwind CSS v4, dark mode, and Prisma ORM — pre-wired and ready to ship.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![next-intl](https://img.shields.io/badge/next--intl-4.x-blue)](https://next-intl.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma)](https://prisma.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?logo=typescript)](https://typescriptlang.org)

---

## What's included

| Feature | Details |
|---|---|
| **RTL + LTR** | Full Arabic/English support with Tailwind logical properties |
| **next-intl v4** | Routing, metadata, static rendering — all configured |
| **Dark mode** | next-themes with flash-free hydration |
| **Tailwind v4** | CSS-first config with a complete design token system |
| **Prisma ORM** | PostgreSQL with dev-safe singleton pattern |
| **TypeScript** | Strict mode, fully typed locales and translation keys |
| **SEO ready** | hreflang alternates, OG tags, x-default locale |
| **proxy.ts** | Correct middleware naming for Next.js 16 |

---

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/kerolos-adel/nextjs-rtl-starter.git my-project
cd my-project
npm install
```

### 2. Setup environment

```bash
cp .env.example .env
```

Edit `.env` and add your database connection string:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"
```

Recommended: [Neon](https://neon.tech) (free tier, serverless Postgres)

### 3. Setup database

```bash
npm run db:generate   # generate Prisma client
npm run db:push       # push schema to database
```

### 4. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/ar` automatically.

---

## Project structure

```
src/
├── app/
│   ├── (intl)/
│   │   └── [locale]/         # All internationalized pages
│   │       ├── layout.tsx    # dir, lang, fonts, metadata
│   │       ├── page.tsx      # Home page
│   │       └── about/
│   └── (non-intl)/
│       └── api/              # API routes (no locale prefix)
├── i18n/
│   ├── routing.ts            # Locale config
│   ├── request.ts            # next-intl server config
│   └── navigation.ts        # Type-safe Link, useRouter
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── ui/                   # Reusable UI components
│   └── shared/               # Cross-feature components
├── lib/
│   ├── prisma.ts             # Prisma singleton
│   └── utils.ts             # cn(), isRTL(), getDir()
├── types/                    # Shared TypeScript types
└── proxy.ts                  # Middleware (Next.js 16 name)
messages/
├── ar.json                   # Arabic translations
└── en.json                   # English translations
prisma/
└── schema.prisma             # Database schema
```

---

## Adding a new page

1. Create `src/app/(intl)/[locale]/your-page/page.tsx`
2. Add translations to `messages/ar.json` and `messages/en.json`
3. Add the link to `Navbar.tsx`

```tsx
// src/app/(intl)/[locale]/your-page/page.tsx
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export default async function YourPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <YourContent />
}

function YourContent() {
  const t = useTranslations('YourNamespace')
  return <div>{t('title')}</div>
}
```

---

## Adding a new database model

Edit `prisma/schema.prisma`:

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  createdAt DateTime @default(now())

  @@map("posts")
}
```

Then run:

```bash
npm run db:migrate
```

Use in a Server Component:

```ts
import { prisma } from '@/lib/prisma'

const posts = await prisma.post.findMany()
```

---

## Customizing the theme

All design tokens live in `src/app/globals.css`:

```css
:root {
  --primary: #6366f1;      /* Change your brand color here */
  --background: #ffffff;
  /* ... */
}

.dark {
  --primary: #818cf8;
  --background: #0a0a0f;
  /* ... */
}
```

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

Add `DATABASE_URL` in your Vercel project environment variables.

### Docker / other

```bash
npm run build
npm start
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run db:push` | Push schema without migration |
| `npm run db:migrate` | Create and run migration |
| `npm run db:studio` | Open Prisma Studio |
| `npm run db:generate` | Regenerate Prisma client |

---

## Built by

[Kerolos Adel](https://kerolos-adel.vercel.app) — Frontend & Mobile Developer

---

## 📄 License
 
MIT © [Kerolos Adel](https://kerolos-adel.vercel.app) . Use freely in personal and commercial projects.
