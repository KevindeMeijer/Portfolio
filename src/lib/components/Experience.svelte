<script>
  import { work } from '../data.js';
  import { reveal } from '../reveal.js';
  import ExperienceRow from './ExperienceRow.svelte';
</script>

<section id="work">
  <div class="wrap">
    <div class="section-head" use:reveal>
      <div>
        <div class="eyebrow"><span class="dot"></span>01 — Experience</div>
        <h2>Selected experience</h2>
      </div>
      <p class="lede">Five years in UX design, with roots in front-end development.</p>
    </div>

    <div>
      {#each work as entry}
        <ExperienceRow {entry} />
      {/each}
      <div class="closing-line"></div>
    </div>
  </div>
</section>

<style>
  section {
    padding: clamp(76px, 12vh, 150px) 0;
  }

  .wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 5vw, 72px);
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: clamp(30px, 5vh, 56px);
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
    background: var(--red);
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

  .lede {
    margin: 0;
    max-width: 34ch;
    font-size: 0.98rem;
    line-height: 1.5;
    color: var(--text-muted);
  }

  .closing-line {
    border-top: 1px solid var(--line);
  }
</style>
