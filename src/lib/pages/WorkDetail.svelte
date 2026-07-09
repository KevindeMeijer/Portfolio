<script>
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import { work } from '../data.js';
  import FocusHeader from '../components/FocusHeader.svelte';
  import FocusFooter from '../components/FocusFooter.svelte';

  let { params = {} } = $props();

  // All roles that share this org's focus page (e.g. both Centraal Beheer entries).
  const entries = $derived(work.filter((w) => w.href === `/work/${params.slug ?? ''}`));
  const title = $derived(entries[0]?.org ?? params.slug ?? 'Work');

  onMount(() => window.scrollTo(0, 0));
</script>

<FocusHeader />

<main class="focus">
  <div class="wrap">
    <a class="back" href="/" use:link>← Back to portfolio</a>

    <div class="eyebrow"><span class="chip"></span>Case study</div>
    <h1>{title}</h1>

    {#if entries.length}
      <ul class="roles">
        {#each entries as e}
          <li>
            <span class="period">{e.period}</span>
            <span class="role">{e.role}</span>
            <span class="type">{e.type}</span>
          </li>
        {/each}
      </ul>
    {/if}

    <p class="note">Full case study coming soon.</p>
  </div>
</main>

<FocusFooter />

<style>
  .focus {
    min-height: 100vh;
    padding: clamp(48px, 10vh, 120px) 0;
  }

  .wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 clamp(20px, 5vw, 72px);
  }

  .back {
    display: inline-block;
    margin-bottom: clamp(32px, 6vh, 64px);
    text-decoration: none;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    background-image: linear-gradient(var(--ink), var(--ink));
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 100% 1.5px;
    padding: 2px 5px;
    transition:
      background-size 0.35s ease,
      color 0.35s ease;
  }

  .back:hover {
    background-size: 100% 100%;
    color: var(--page);
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 11px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-faint);
  }

  .chip {
    width: 12px;
    height: 12px;
    background: var(--red);
    display: block;
    flex: 0 0 auto;
  }

  h1 {
    margin: 16px 0 0;
    font-size: clamp(2rem, 5vw, 3.6rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.02;
  }

  .roles {
    list-style: none;
    margin: clamp(28px, 5vh, 48px) 0 0;
    padding: 0;
    border-top: 1px solid var(--line);
  }

  .roles li {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 8px 18px;
    padding: 16px 0;
    border-bottom: 1px solid var(--line);
  }

  .period {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.8rem;
    color: var(--text-muted);
    min-width: 12ch;
  }

  .role {
    font-size: 1.05rem;
    color: var(--text);
  }

  .type {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.64rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    border: 1px solid var(--line-soft);
    border-radius: 4px;
    padding: 4px 9px;
  }

  .note {
    margin-top: clamp(28px, 5vh, 48px);
    font-size: 1rem;
    color: var(--text-muted);
  }
</style>
