<script>
  import { link } from 'svelte-spa-router';
  import { photos } from '../data.js';
  import { reveal } from '../reveal.js';
</script>

<section id="photo">
  <div class="wrap">
    <div class="section-head" use:reveal>
      <div>
        <div class="eyebrow"><span class="dot"></span>04 — Photography</div>
        <h2>Selected frames</h2>
      </div>
      <p class="lede">Event &amp; documentary work — click a frame to open the full series.</p>
    </div>

    <div class="grid" use:reveal>
      {#each photos as p}
        <figure>
          <div class="frame" style="border-color:{p.color};">
            {#if p.src}
              <img src={p.src} alt={p.cap} />
            {:else}
              <span class="ph">[ photograph ]</span>
            {/if}
            <a
              class="open"
              href={p.href}
              use:link
              aria-label="Open series"
              title="Open series">→</a>
          </div>
          <figcaption><a class="cap" href={p.href} use:link>{p.cap}</a></figcaption>
        </figure>
      {/each}
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
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 24px;
    flex-wrap: wrap;
    margin-bottom: clamp(30px, 5vh, 52px);
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
    max-width: 32ch;
    font-size: 0.98rem;
    line-height: 1.5;
    color: var(--text-muted);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: clamp(16px, 2vw, 28px);
  }

  figure {
    margin: 0;
  }

  .frame {
    aspect-ratio: 3 / 4;
    position: relative;
    background-color: var(--ph-b);
    background-image: repeating-linear-gradient(135deg, var(--ph-a) 0 10px, var(--ph-b) 10px 20px);
    border: 4px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .frame img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .ph {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-faintest);
  }

  /* Corner button — same bottom-up ink fill sweep as the site's links */
  .open {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 17px;
    color: var(--text);
    border: 2px solid var(--ink);
    background-color: var(--page);
    background-image: linear-gradient(var(--ink), var(--ink));
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 100% 0%;
    transition: background-size 0.35s ease, color 0.35s ease;
  }

  .open:hover {
    background-size: 100% 100%;
    color: var(--page);
  }

  figcaption {
    margin-top: 12px;
  }

  .cap {
    display: block;
    text-decoration: none;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: var(--text-muted);
    padding: 4px 0;
    transition: color 0.3s;
  }

  .cap:hover {
    color: var(--text);
  }
</style>
