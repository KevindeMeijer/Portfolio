<script>
  import { facts } from '../data.js';
  import { reveal } from '../reveal.js';
</script>

<section class="facts-section">
  <div class="wrap">
    <div class="grid" use:reveal={{ delay: 50 }}>
      {#each facts as f}
        <div class="cell" style="background:{f.bg};">
          <div class="key" style="color:{f.sub};">{f.k}</div>
          <div class="value" style="color:{f.fg};">{f.v}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .facts-section {
    padding: clamp(24px, 4vh, 40px) 0 clamp(8px, 2vh, 24px);
  }

  .wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 5vw, 72px);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 4px;
    background: var(--ink);
    border: 4px solid var(--ink);
  }

  .cell {
    padding: 24px 24px 26px;
  }

  .key {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.68rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .value {
    margin-top: 10px;
    font-size: 1.02rem;
    font-weight: 500;
    letter-spacing: -0.01em;
  }
</style>
