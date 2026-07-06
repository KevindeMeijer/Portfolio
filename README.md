# Kevin de Meijer — Portfolio

Personal portfolio site for Kevin de Meijer, UX designer and photographer based in the Netherlands. Single-page site with a hero, experience timeline, about section, craft/skills overview, photography grid, education/certifications, and contact footer, with a light/dark theme toggle.

Built with [Svelte 5](https://svelte.dev) and [Vite](https://vitejs.dev).

## Getting started

Requires Node.js.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (default `http://localhost:5173`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally |

## Tech stack

- [Svelte 5](https://svelte.dev) — components
- [Vite](https://vitejs.dev) — dev server and build
- [simple-icons](https://simpleicons.org) — social icon glyphs
- Plain CSS with custom properties for theming (light/dark)

## Project structure

```
src/
  App.svelte              # page shell
  main.js                 # entry point
  app.css                 # global styles/tokens
  lib/
    theme.js               # light/dark theme store
    reveal.js               # scroll-reveal behavior
    components/             # one component per section
```

## License

All rights reserved. This is a personal portfolio; content and code are not licensed for reuse.
