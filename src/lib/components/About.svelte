<script>
    import { reveal } from "../reveal.js";
</script>

<section id="about">
    <div class="wrap">
        <div use:reveal>
            <div class="portrait">
                <span>[ portrait ]</span>
            </div>
        </div>
        <div use:reveal={{ delay: 80 }}>
            <div class="eyebrow"><span class="dot"></span>02 — About</div>
            <h2>A UX designer, and a photographer at heart.</h2>
            <div class="copy">
                <p>
                    These days my focus is UX design — shaping user-centred
                    products at Centraal Beheer. I came to it through front-end
                    development, building learning-analytics and marketplace
                    interfaces, which still grounds how I design.
                </p>
                <p>
                    My background in Open-ICT and a photojournalism minor taught
                    me to care equally about how something works and how it
                    looks. Along the way I chaired study association Indicium
                    through its first lustrum year, mentored students, and
                    reviewed code.
                </p>
                <p>
                    Away from screens I shoot event and documentary photography,
                    including for the Dutch Fortress Museum.
                </p>
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
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: clamp(40px, 6vw, 90px);
        align-items: start;
    }

    .portrait {
        aspect-ratio: 4 / 5;
        background-color: var(--ph-b);
        background-image: repeating-linear-gradient(
            135deg,
            var(--ph-a) 0 10px,
            var(--ph-b) 10px 20px
        );
        border: 5px solid var(--ink);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .portrait span {
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--text-faintest);
    }

    .eyebrow {
        display: flex;
        align-items: center;
        gap: 11px;
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.74rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--text-faint);
    }

    .dot {
        width: 12px;
        height: 12px;
        background: var(--blue);
        display: block;
        flex: 0 0 auto;
    }

    h2 {
        margin: 16px 0 0;
        font-size: clamp(1.7rem, 3.2vw, 2.7rem);
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1.08;
        max-width: 18ch;
    }

    .copy {
        margin-top: 26px;
        max-width: 58ch;
        display: flex;
        flex-direction: column;
        gap: 18px;
        font-size: 1.08rem;
        line-height: 1.6;
        color: var(--text-mid);
    }

    .copy p {
        margin: 0;
    }
</style>
