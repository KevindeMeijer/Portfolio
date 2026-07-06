<script>
  import { reveal } from '../reveal.js';
</script>

<section class="hero">
  <div class="wrap">
    <div use:reveal>
      <div class="eyebrow">
        <span class="swatches">
          <span class="swatch" style="background:var(--red);"></span>
          <span class="swatch" style="background:var(--yellow);"></span>
          <span class="swatch" style="background:var(--blue);"></span>
        </span>
        UX Design&nbsp;·&nbsp;Photography
      </div>
      <h1>Designing products that feel effortless.</h1>
      <p class="intro">
        I'm Kevin de Meijer — a UX designer and photographer based in the Netherlands, currently shaping digital
        insurance products at Centraal Beheer. A front-end background keeps my work grounded in what's buildable:
        clear, accessible, human.
      </p>
      <div class="ctas">
        <a href="#work" class="cta-primary">View work →</a>
        <a href="#contact" class="cta-secondary">Get in touch</a>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding-top: clamp(64px, 11vh, 128px);
    padding-bottom: clamp(40px, 7vh, 80px);
  }

  .wrap {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 5vw, 72px);
  }

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-faint);
  }

  .swatches {
    display: inline-flex;
    gap: 4px;
    flex: 0 0 auto;
  }

  .swatch {
    width: 10px;
    height: 10px;
    display: block;
  }

  h1 {
    font-size: clamp(2.6rem, 7.2vw, 6.4rem);
    line-height: 0.97;
    letter-spacing: -0.035em;
    font-weight: 500;
    margin: clamp(22px, 4vh, 40px) 0 0;
    max-width: 17ch;
    text-wrap: balance;
  }

  .intro {
    margin: clamp(26px, 4.5vh, 44px) 0 0;
    max-width: 62ch;
    font-size: clamp(1.05rem, 1.5vw, 1.32rem);
    line-height: 1.55;
    color: var(--text-mid);
  }

  .ctas {
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    align-items: center;
    margin-top: clamp(30px, 5vh, 52px);
  }

  .cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--blue);
    color: #ffffff;
    padding: 15px 24px;
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    border: 2px solid var(--ink);
    transition: background 0.35s, color 0.35s;
  }

  .cta-primary:hover {
    background: var(--ink);
    color: var(--page);
  }

  .cta-secondary {
    display: inline-flex;
    align-items: center;
    color: var(--text);
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 0.74rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-decoration: none;
    background-image: linear-gradient(var(--red), var(--red));
    background-repeat: no-repeat;
    background-position: 0 100%;
    background-size: 100% 2px;
    padding: 2px 5px 5px;
    transition: background-size 0.35s ease, color 0.35s ease;
  }

  .cta-secondary:hover {
    background-size: 100% 100%;
    color: #ffffff;
  }
</style>
