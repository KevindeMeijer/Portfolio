<script>
  import { craft, tools } from '../data.js';
  import { reveal } from '../reveal.js';
</script>

<section id="craft">
  <div class="wrap">
    <div class="section-head" use:reveal>
      <div class="eyebrow"><span class="dot"></span>03 — Craft</div>
      <h2>What I do</h2>
    </div>

    <div class="cards" use:reveal>
      {#each craft as c}
        <div class="card" style="border-top-color:{c.color};">
          <div class="number" style="color:{c.color};">{c.n}</div>
          <h3>{c.title}</h3>
          <p>{c.items}</p>
        </div>
      {/each}
    </div>

    <div class="tools-row" use:reveal={{ delay: 60 }}>
      <div class="tools-label">Tools</div>
      <div class="chips">
        {#each tools as t}
          <span class="chip" style="--chip-bg:{t.bg}; --chip-fg:{t.fg};">{t.name}</span>
        {/each}
      </div>
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
  }

  .section-head {
    margin-bottom: clamp(34px, 5vh, 60px);
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

  .dot {
    width: 12px;
    height: 12px;
    background: var(--yellow);
    display: block;
    flex: 0 0 auto;
  }

  h2 {
    margin: 16px 0 0;
    font-size: clamp(1.9rem, 4vw, 3.1rem);
    font-weight: 500;
    letter-spacing: -0.025em;
    line-height: 1.02;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 4px;
    background: var(--ink);
    border: 4px solid var(--ink);
    overflow: hidden;
  }

  .card {
    background: var(--surface);
    border-top: 6px solid;
    padding: clamp(28px, 3vw, 40px);
  }

  .number {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.78rem;
    letter-spacing: 0.08em;
  }

  h3 {
    margin: 18px 0 0;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .card p {
    margin: 14px 0 0;
    font-size: 0.98rem;
    line-height: 1.6;
    color: var(--text-muted);
  }

  .tools-row {
    margin-top: clamp(32px, 4vh, 48px);
    display: flex;
    gap: clamp(16px, 3vw, 40px);
    flex-wrap: wrap;
    align-items: baseline;
  }

  .tools-label {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-faint);
    flex: 0 0 auto;
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .chip {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.76rem;
    letter-spacing: 0.02em;
    color: var(--text);
    background: var(--surface);
    border: 1.5px solid var(--ink);
    border-radius: 0;
    padding: 7px 12px;
    cursor: default;
    display: inline-block;
    transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.18s ease, color 0.18s ease,
      border-color 0.18s ease;
    will-change: transform;
  }

  .chip:hover {
    transform: translateY(-4px) rotate(-2.5deg);
    background: var(--chip-bg);
    color: var(--chip-fg);
    border-color: var(--chip-bg);
  }
</style>
