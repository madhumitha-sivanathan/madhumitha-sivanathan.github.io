# Madhumitha S. — AI/ML & Computer Vision Portfolio

A single-page, recruiter-focused portfolio built with React, Vite, Tailwind CSS,
and Framer Motion. Frontend-only, no backend/database/auth.

## Tech stack

- **React 19** + **Vite** — build tooling
- **Tailwind CSS** — styling, custom dark design system (see `tailwind.config.js`)
- **Framer Motion** — scroll reveals, hover states, page-load animation
- **lucide-react** — icon set (GitHub/LinkedIn use two small custom icons in
  `src/components/icons/SocialIcons.jsx`, since lucide-react v1 dropped brand icons)

## Project structure

```
src/
├── components/
│   ├── ui/                 # Section, Reveal, Badge — small reusable primitives
│   ├── icons/               # Custom GitHub/LinkedIn icons
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── HeroVisual.jsx        # Signature CV-detection visual
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectThumb.jsx
│   ├── PipelineDiagram.jsx   # Architecture flow diagram used inside project cards
│   ├── Experience.jsx
│   ├── Education.jsx
│   ├── Achievements.jsx      # Achievements + certifications + GitHub/LeetCode
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/                    # All content lives here, separate from UI
│   ├── profile.js            # Name, links, resume path, about text
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   ├── certifications.js
│   └── achievements.js
├── App.jsx
├── main.jsx
└── index.css                 # Design tokens, glass/grid/CV-frame utilities
```

## Before you deploy — placeholders to fill in

Everything below was intentionally left as a placeholder rather than invented.
Search for `TODO` in `src/data/profile.js` and `src/data/projects.js`, or use
this checklist:

- [ ] `src/data/profile.js` → real `email`, `github`, `linkedin`, `leetcode` URLs
- [ ] `public/Madhumitha-Resume.pdf` → add your actual resume PDF at this exact
      path/filename (the Hero and Contact "Download Resume" buttons already
      point to `/Madhumitha-Resume.pdf`)
- [ ] `src/data/projects.js` → add real `github` (and `demo`, if deployed) URLs
      per project — cards currently show "Repo link coming soon" where `github`
      is `null`
- [ ] Optional: swap `ProjectThumb.jsx`'s icon placeholders for real
      screenshots/diagrams once you have them

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploy to GitHub Pages

This project is configured for a **user page** repo named `madhumitha.github.io`,
which serves from the repo root (`base: '/'` in `vite.config.js`). If you
instead deploy this as a **project page** (any repo name other than
`<username>.github.io`), change `base` in `vite.config.js` to `'/<repo-name>/'`
before building.

1. Create a GitHub repo named exactly `madhumitha.github.io` and push this
   project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/madhumitha.github.io.git
   git push -u origin main
   ```

2. Deploy (builds automatically via `predeploy`, then publishes `dist/` to the
   `gh-pages` branch):

   ```bash
   npm run deploy
   ```

3. In the repo's **Settings → Pages**, set the source branch to `gh-pages`
   (this happens automatically the first time `gh-pages` runs, but double-check
   it if the site doesn't appear).

4. Your site will be live at:

   ```
   https://<your-username>.github.io
   ```

   (or `https://madhumitha.github.io` if that's your actual GitHub username).

## Notes

- Dark mode only, by design — no light-mode toggle was requested.
- All animations respect `prefers-reduced-motion` (see the media query at the
  bottom of `src/index.css`).
- No fabricated skill percentages, metrics, or achievements — content in
  `src/data/` reflects only what was provided.
