# Portfolio Frontend (Next.js + TypeScript)
Git FE :https://github.com/mahmudur987/portfolio-front-end-nextjs
Live FE :https://portfolio-front-end-nextjs.vercel.app/

GIT BE :https://github.com/mahmudur987/Portfolio-Server-Prisma-Postgress
Live BE:https://portfolio-server-prisma-postgress.vercel.app/

AdminEmail:Admin@gmail.com
Admin Password:123456











**Stack:** Next.js (TypeScript) + Tailwind CSS + React Hot Toast + React Query/RTK Query (optional)  
**Rendering:** SSG for About, ISR for Blogs & Projects, Client-side for Dashboard (owner only)

---

## Features

- Public pages:
  - Home
  - About (SSG)
  - All Blogs page (ISR)
  - Individual Blog page (getStaticPaths + ISR)
  - Project showcase (ISR)
- Private pages (owner only):
  - Login page
  - Admin Dashboard (manage blogs/projects)
  - Create / Edit blog (rich text editor optional)
- Notifications: `react-hot-toast`
- Rich text editor (optional): `react-quill`
- Responsive, accessible UI with Tailwind CSS

---

## Repo structure (high level)

├─ pages/
│ ├─ index.tsx
│ ├─ about.tsx
│ ├─ blogs/
│ │ ├─ index.tsx # ISR: /blogs
│ │ └─ [slug].tsx # ISR: /blogs/:slug
│ ├─ dashboard/
│ │ ├─ index.tsx # Auth required
│ │ └─ blogs/ # admin blog management pages
│ └─ api/ # client-only helper API routes (optional)
├─ components/
├─ lib/
│ └─ api.ts # wrapper for calling backend API
├─ styles/
└─ next.config.js

---

## Quickstart (local)

### 1. Clone & install

```bash
git clone <frontend-repo-url>
cd <frontend-repo-dir>
npm install
2. Environment variables

Create .env.local with the following (example):

NEXT_PUBLIC_API_URL=http://localhost:4000/api
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key   # only if using Supabase client in frontend (optional)
NEXT_PUBLIC_SITE_URL=http://localhost:3000


NEXT_PUBLIC_API_URL is the backend URL (Express app). For production change to deployed backend URL.

3. Run dev

npm run dev
# or
next dev
Open http://localhost:3000

4. Build & start (production)
npm run build
npm run start
ISR (Incremental Static Regeneration)

All Blogs page uses getStaticProps with revalidate (e.g. revalidate: 60) to keep content updated.

Blog pages use getStaticPaths with fallback: 'blocking' and getStaticProps with revalidate for dynamic generation.


Auth & Dashboard

Login calls POST ${NEXT_PUBLIC_API_URL}/auth/login and stores JWT (recommended: use httpOnly cookie set by backend for security).

Dashboard pages should protect owner-only routes (client-side redirect on 401 and server-side checks where possible).

Rich Text Editor (optional)

react-quill can be used for blog creation/editing. Save HTML or Markdown (your choice) in backend.

Deployment
Vercel (recommended for frontend)

Next.js auto-detected.

Set Environment Variables in Vercel dashboard.

Build command: npm run build

Output: automatic

Backend URL

Configure NEXT_PUBLIC_API_URL to point at your deployed backend (e.g., https://portfolio-backend.example.com/api).

Testing & Debugging

Use Postman / Thunder Client to verify backend endpoints first.

If ISR pages show stale content, adjust revalidate interval.

Check browser console & network for 401 unauthorized errors on dashboard pages.

Sample Admin credentials (for local testing)

Email: admin@gmail.com
Password: 123456
Useful scripts

npm run dev — start dev server

npm run build — production build

npm run start — start built app

Future improvements

Use httpOnly refresh token flow for auth

Image management via Supabase Storage

Add previews/snapshots for blog posts

Add unit & E2E tests (Jest + Cypress)

Need help?

If you want, I can:

Wire up the login flow to use httpOnly cookies and refresh tokens,

Implement the dashboard pages and forms,

Add React Quill editor integration and image upload to Supabase Storage.



---

If you want, I can:
- Drop these files into your repositories (I can provide the raw text for copy/paste or create the files in a code canvas).
- Also generate a `prisma/seed.ts` that inserts the **combined project JSON** and the sample posts you approved (formatted as `Date` objects/ISO strings) and put that in the backend README or repo.

Which would you like next?
```
