export const facts = [
  {
    k: "Where I'm from",
    v: "The Netherlands 🇳🇱",
    bg: "#FBFBF9",
    fg: "#16150F",
    sub: "#A6A59D",
  },
  {
    k: "What I do",
    v: "UX Designer | Centraal Beheer",
    bg: "var(--blue)",
    fg: "#FFFFFF",
    sub: "rgba(255,255,255,0.72)",
  },
  {
    k: "Focus",
    v: "Research/Design/Photography",
    bg: "var(--yellow)",
    fg: "#16150F",
    sub: "rgba(22,21,15,0.6)",
  },
  {
    k: "Status",
    v: "Working",
    // Need to put something better here
    bg: "var(--red)",
    fg: "#FFFFFF",
    sub: "rgba(255,255,255,0.78)",
  },
];

// `href` points at the focus/case-study page for that org (client-side route).
export const work = [
  {
    href: "/work/centraal-beheer",
    period: "March 2025 — Now",
    type: "Full-time",
    meta: "Apeldoorn, NL · Hybrid",
    role: "UX Designer",
    org: "Centraal Beheer Achmea",
    summary:
      "Designing and shipping clear, accessible interfaces for the digital insurance products of one of the Netherlands' largest insurers.",
    toolsLabel: "UX Design / UX Research / Figma",
  },
  {
    href: "/work/centraal-beheer",
    period: "2024",
    type: "Internship",
    meta: "Apeldoorn, NL · Hybrid · 7 mo",
    role: "UI/UX Design Intern",
    org: "Centraal Beheer Achmea",
    summary:
      "Turned product research and requirements into tested, build-ready interface designs over a seven-month placement.",
    toolsLabel: "UX Design / UX Research / Figma",
  },
  {
    href: "/work/devdroplets-fyndr",
    period: "2021 — 2022",
    type: "Internship",
    meta: "Utrecht, NL · Hybrid",
    role: "Front-end Developer / UX Designer",
    org: "DevDroplets · FyndR",
    summary:
      "Built and styled front-end features while shaping the end-to-end experience of the FyndR product.",
    toolsLabel: "UX Design / Vue / SCSS / Figma / Git(labs)",
  },
  {
    href: "/work/devdroplets-la",
    period: "2020 — 2021",
    type: "Internship",
    meta: "Utrecht, NL · On-site",
    role: "Front-end Developer / UX Designer",
    org: "DevDroplets · Learning Analytics",
    summary:
      "My first professional role — developing front-end interfaces for a learning-analytics platform.",
    toolsLabel: "UX Design / Vue / SCSS / Figma / Git(labs)",
  },
];

export const craft = [
  {
    n: "01",
    title: "UX Design",
    items:
      "User research · Prototyping · Interaction design · Accessibility (WCAG)",
    color: "#E0312A",
  },
  {
    n: "02",
    title: "Photography",
    items: "Event · Documentary · Editing & retouching in Lightroom",
    color: "#F7C600",
  },
  {
    n: "03",
    title: "Front-end",
    items:
      "HTML · CSS · SCSS / SASS · Component build — design grounded in code",
    color: "#1E4FA3",
  },
];

export const tools = [
  { name: "Figma", bg: "#E0312A", fg: "#FFFFFF" },
  { name: "Adobe InDesign", bg: "#1E4FA3", fg: "#FFFFFF" },
  { name: "Adobe Lightroom", bg: "#F7C600", fg: "#16150F" },
  { name: "Adobe Photoshop", bg: "#16150F", fg: "#FFFFFF" },
  { name: "SCSS / SASS", bg: "#E0312A", fg: "#FFFFFF" },
  { name: "HTML & CSS", bg: "#1E4FA3", fg: "#FFFFFF" },
  { name: "Code review", bg: "#F7C600", fg: "#16150F" },
  { name: "WCAG 2.x", bg: "#16150F", fg: "#FFFFFF" },
];

// `href` opens the full series; `src` is the cover image (empty = placeholder).
export const photos = [
  {
    cap: "Nederlands Vestingmuseum",
    color: "#E0312A",
    href: "/photography/vestingmuseum",
    src: "",
  },
  {
    cap: "Studievereniging Indicium",
    color: "#1E4FA3",
    href: "/photography/indicium",
    src: "",
  },
  {
    cap: "Photojournalism minor",
    color: "#F7C600",
    href: "/photography/photojournalism",
    src: "",
  },
];

export const education = [
  {
    period: "2019 — 2024",
    title: "BSc — Open-ICT",
    org: "Hogeschool Utrecht",
    note: "Chairman at study association Indicium in 2021. Student mentor and reviewer for Open-IT students during my time at the Hogeschool Utrecht.",
  },
  {
    period: "2022 — 2023",
    title: "Minor — Photojournalism & Visual Editing",
    org: "Hogeschool Utrecht",
    note: "Press & documentary photography, editing in Adobe Lightroom (Classic), writing articles. Documentary about local Repair Cafés.",
  },
  {
    period: "2017 — 2019",
    title: "Secondary Education (HAVO) — Economics & Society",
    org: "Vituscollege",
    note: "Active in stage lighting & sound, class representation, and Cambridge Advanced English. Graduated with an 8 on average.",
  },
  {
    period: "2012 — 2017",
    title: "Pre-University Education (VWO) — Science & Technology",
    org: "Vituscollege",
    note: "Active in stage lighting & sound, class representation, and Cambridge Advanced English.",
  },
];

export const certs = [
  {
    period: "2025",
    title: "UX Prototyping",
    org: "UX Academy Nederland",
    note: "Hands-on training in building and testing interactive prototypes. Learning how to validate flows and interactions by quick sketches and advanced drawings.",
  },
  {
    period: "2025",
    title: "Introduction to Web Accessibility",
    org: "edX",
    note: "Foundations of WCAG and inclusive design practice. Building interfaces that work for everyone, including assistive technology.",
  },
  {
    period: "2018",
    title:
      "C1 Cambridge English Level 2 Certificate in ESOL International (Advanced)",
    org: "Cambridge English",
    note: "Advanced-level English language certification, demonstrating fluent, confident command of written and spoken English.",
  },
];

export const socials = [
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kevindemeijer/",
    label: "LinkedIn",
    bg: "#0A66C2",
  },
  {
    icon: "github",
    link: "https://github.com/KevindeMeijer",
    label: "GitHub",
    bg: "#181717",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com/kevkevdemeijer/",
    label: "Instagram",
    bg: "linear-gradient(45deg, #F58529 0%, #DD2A7B 55%, #8134AF 80%, #515BD4 100%)",
  },
  {
    icon: "youtube",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    label: "YouTube",
    bg: "#FF0000",
  },
  {
    icon: "twitch",
    link: "https://www.twitch.tv/kevkev_beast",
    label: "Twitch",
    bg: "#9146FF",
  },
  {
    icon: "tidal",
    link: "https://tidal.com/@kevin_dm",
    label: "Tidal",
    bg: "#000000",
  },
  {
    icon: "telegram",
    link: "https://t.me/KevindeMeijer",
    label: "Telegram",
    bg: "#26A5E4",
  },
  {
    icon: "discord",
    link: "https://discord.com/users/281123679138480128",
    label: "Discord",
    bg: "#5865F2",
  },
  {
    icon: "steam",
    link: "https://steamcommunity.com/id/kevkev_beast/",
    label: "Steam",
    bg: "#171A21",
  },
];
