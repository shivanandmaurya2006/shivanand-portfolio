# Shivanand Maurya — Portfolio

A responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS v4, Motion, and Lucide icons.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Contact form delivery

The contact form works in two modes:

1. **No service configured (default):** prepares a message in the visitor's email app addressed to `25113CN040@glbitm.ac.in`.
2. **Direct form delivery:** create a form with Formspree, copy its endpoint into `.env.local`, and restart the dev server.

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Use the real endpoint provided by your own Formspree account; the example above is not a working endpoint. Test delivery before deployment.

## Before deploying to Vercel

- Replace `https://example.com` in `src/app/layout.tsx` with the actual public domain when available.
- Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Vercel project environment variables if direct delivery is enabled.
- Test all links and the contact flow on the deployed domain.
- Confirm you are comfortable displaying your phone number and date of birth publicly. They are included because you requested them, but can be removed from `src/app/page.tsx` if you change your mind.

## Content integrity

The portfolio includes the information supplied by Shivanand Maurya. It intentionally does not invent projects, work experience, or a resume. The certificate PDF and portrait supplied for this project are stored in `public/`.
