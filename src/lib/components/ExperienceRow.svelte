<script>
  import { link } from 'svelte-spa-router';
  import { reveal } from '../reveal.js';

  let { entry } = $props();
</script>

<a class="row" href={entry.href} use:link use:reveal>
  <div class="meta-col">
    <div class="period">{entry.period}</div>
    <div class="type">{entry.type}</div>
    <div class="meta">{entry.meta}</div>
  </div>
  <div class="content-col">
    <div class="role">{entry.role}</div>
    <div class="org">{entry.org}</div>
    <p class="summary">{entry.summary}</p>
    <div class="tools">{entry.toolsLabel}</div>
  </div>
  <div class="arrow" aria-hidden="true">→</div>
</a>

<style>
  .row {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    border-top: 1px solid var(--line);
    padding: clamp(24px, 3.4vw, 38px) clamp(8px, 1.6vw, 20px);
    display: grid;
    grid-template-columns: minmax(120px, 170px) minmax(0, 1fr) auto;
    gap: clamp(16px, 3vw, 48px);
    align-items: start;
    border-radius: 8px;
    transition: opacity 0.9s cubic-bezier(0.22, 0.61, 0.18, 1), transform 0.9s cubic-bezier(0.22, 0.61, 0.18, 1),
      background 0.4s;
  }

  .row:hover {
    background: var(--surface-alt);
  }

  /* Arrow button — bottom-up ink fill sweep, matching the site's link animation */
  .arrow {
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    border: 2px solid var(--ink);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: var(--text);
    background-image: linear-gradient(var(--ink), var(--ink));
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 100% 0%;
    transition: background-size 0.35s ease, color 0.35s ease;
  }

  .row:hover .arrow {
    background-size: 100% 100%;
    color: var(--page);
  }

  .period {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.84rem;
    letter-spacing: 0.04em;
    color: var(--text);
  }

  .type {
    margin-top: 14px;
    display: inline-block;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.64rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    border: 1px solid var(--line-soft);
    border-radius: 4px;
    padding: 4px 9px;
  }

  .meta {
    margin-top: 14px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--text-faintest);
    line-height: 1.6;
  }

  .role {
    font-size: clamp(1.35rem, 2.4vw, 2.1rem);
    font-weight: 500;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  .org {
    margin-top: 9px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  .summary {
    margin: 16px 0 0;
    max-width: 60ch;
    font-size: 1.02rem;
    line-height: 1.55;
    color: var(--text-mid);
  }

  .tools {
    margin-top: 16px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.06em;
    color: var(--text-faintest);
  }
</style>
