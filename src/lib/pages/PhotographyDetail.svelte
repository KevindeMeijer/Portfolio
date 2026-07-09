<script>
  import { onMount } from 'svelte';
  import { link } from 'svelte-spa-router';
  import { photos } from '../data.js';
  import FocusHeader from '../components/FocusHeader.svelte';
  import FocusFooter from '../components/FocusFooter.svelte';

  let { params = {} } = $props();

  const photo = $derived(photos.find((p) => p.href === `/photography/${params.slug ?? ''}`));
  const title = $derived(photo?.cap ?? params.slug ?? 'Series');
  const accent = $derived(photo?.color ?? 'var(--red)');

  onMount(() => window.scrollTo(0, 0));
</script>

<FocusHeader />

<main class="focus">
  <div class="wrap">
    <a class="back" href="/" use:link>← Back to portfolio</a>

    <div class="eyebrow"><span class="chip" style="background:{accent};"></span>Photo series</div>
    <h1>{title}</h1>

    <div class="frame" style="border-color:{accent};">
      <span class="ph">[ series coming soon ]</span>
    </div>
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
    display: block;
    flex: 0 0 auto;
  }

  h1 {
    margin: 16px 0 clamp(28px, 5vh, 48px);
    font-size: clamp(2rem, 5vw, 3.6rem);
    font-weight: 500;
    letter-spacing: -0.03em;
    line-height: 1.02;
  }

  .frame {
    aspect-ratio: 16 / 9;
    border: 4px solid;
    background-color: var(--ph-b);
    background-image: repeating-linear-gradient(135deg, var(--ph-a) 0 10px, var(--ph-b) 10px 20px);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ph {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-faintest);
  }
</style>
