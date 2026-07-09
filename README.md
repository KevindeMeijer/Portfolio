# Kevin de Meijer — Portfolio

Personal portfolio site for (myself) Kevin de Meijer, UX designer and photographer based in the Netherlands. Single-page site with a hero, experience timeline, about section, craft/skills overview, photography grid, education/certifications, and contact footer, with a light/dark theme toggle.

Built with [Svelte 5](https://svelte.dev) and [Vite](https://vitejs.dev) and the help of [Claude](https://claude.ai).

## Getting started

Requires Node.js.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (default `http://localhost:5173`). Hot reload is automatic on file save.

To stop the dev server, press `Ctrl+C` in the terminal where it's running. If a previous run got orphaned and the port is stuck, find and kill it:

```bash
netstat -ano | findstr :5173
taskkill /PID <pid> /F
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server with hot reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the production build locally to sanity-check the real build before deploying |

## Tech stack

- [Svelte 5](https://svelte.dev) — components
- [Vite](https://vitejs.dev) — dev server and build
- [simple-icons](https://simpleicons.org) — social icon glyphs
- [IBM Carbon Design Icons](https://www.ibm.com/design/language/icons/) — extra UI/UX icon glyphs
- Plain CSS with custom properties for theming (light/dark)

## Project structure

```
src/
  App.svelte               # Page shell
  main.js                  # Entry point
  app.css                  # Global styles/tokens
  lib/
    theme.js               # Light/dark theme store
    reveal.js              # Scroll-reveal behavior
    data.js                # Website content
    components/            # One component per section
    icons/                 # IBM/Carbon Design Icons
```

## License

All rights reserved. This is a personal portfolio; content and code are not licensed for reuse.
