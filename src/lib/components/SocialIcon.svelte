<script module>
  import linkedinRaw from '../icons/logo--linkedin.svg?raw';
  import githubRaw from '../icons/logo--github.svg?raw';
  import discordRaw from '../icons/logo--discord.svg?raw';
  import instagramRaw from '../icons/logo--instagram.svg?raw';
  import youtubeRaw from '../icons/logo--youtube.svg?raw';
  import { siTwitch, siTidal, siTelegram, siSteam } from 'simple-icons';

  // Provided SVGs carry their own <defs>/<style> classes, which would collide across
  // files once several are on the page at once (they reuse names like `.cls-1`).
  // Pull out just the glyph shapes (path/circle) and drop the rest.
  function parseGlyph(svgText) {
    const doc = new DOMParser().parseFromString(svgText, 'image/svg+xml');
    const svg = doc.querySelector('svg');
    const viewBox = svg.getAttribute('viewBox') || '0 0 32 32';
    const markup = Array.from(svg.querySelectorAll('path, circle'))
      .map((el) => el.outerHTML)
      .join('');
    return { viewBox, markup };
  }

  const localIcons = {
    linkedin: parseGlyph(linkedinRaw),
    github: parseGlyph(githubRaw),
    discord: parseGlyph(discordRaw),
    instagram: parseGlyph(instagramRaw),
    youtube: parseGlyph(youtubeRaw),
  };

  // Not yet supplied locally — sourced from simple-icons for now.
  const remoteIcons = {
    twitch: siTwitch,
    tidal: siTidal,
    telegram: siTelegram,
    steam: siSteam,
  };
</script>

<script>
  let { icon, size = 22 } = $props();
  let local = $derived(localIcons[icon]);
  let remote = $derived(remoteIcons[icon]);
</script>

{#if local}
  <svg viewBox={local.viewBox} width={size} height={size} fill="currentColor" aria-hidden="true">
    {@html local.markup}
  </svg>
{:else if remote}
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d={remote.path} />
  </svg>
{:else}
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M8.2 12h7.6M12 8.2v7.6" stroke-linecap="round" />
  </svg>
{/if}
