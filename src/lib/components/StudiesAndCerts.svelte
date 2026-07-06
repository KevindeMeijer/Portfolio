<script>
  import { education, certs } from '../data.js';
  import { reveal } from '../reveal.js';
  import CredentialItem from './CredentialItem.svelte';
</script>

<section id="studies">
  <div class="wrap">
    <div use:reveal>
      <div class="eyebrow"><span class="dot" style="background:var(--blue);"></span>05 — Education</div>
      {#each education as e}
        <CredentialItem item={e} />
      {/each}
      <div class="closing-line"></div>
    </div>

    <div use:reveal={{ delay: 80 }}>
      <div class="eyebrow"><span class="dot" style="background:var(--yellow);"></span>06 — Certifications</div>
      {#each certs as c}
        <CredentialItem item={c} />
      {/each}
      <div class="closing-line"></div>
    </div>
  </div>
</section>

<style>
  section {
    padding: clamp(76px, 12vh, 150px) 0;
    border-top: 2px solid var(--ink);
  }

  .wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 5vw, 72px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: clamp(40px, 6vw, 90px);
    align-items: start;
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
    margin-bottom: 24px;
  }

  .dot {
    width: 12px;
    height: 12px;
    display: block;
    flex: 0 0 auto;
  }

  .closing-line {
    border-top: 1px solid var(--line);
  }
</style>
