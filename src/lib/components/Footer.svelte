<script>
    import { socials } from "../data.js";
    import { reveal } from "../reveal.js";
    import SocialIcon from "./SocialIcon.svelte";

    const year = new Date().getFullYear();
</script>

<div class="mondriaan-strip">
    <span style="flex:3; background:var(--red);"></span>
    <span style="flex:1.3; background:var(--page);"></span>
    <span style="flex:2; background:var(--yellow);"></span>
    <span style="flex:3.6; background:var(--blue);"></span>
</div>

<footer id="contact">
    <div class="wrap">
        <div use:reveal>
            <div class="eyebrow"><span class="dot"></span>07 — Contact me</div>
            <h2>Let's work together.</h2>
            <a href="mailto:kevindemeijer@proton.me" class="email"
                >kevin@devmeijer.com</a
            >
        </div>

        <div class="socials-block" use:reveal={{ delay: 60 }}>
            <div class="find-label">Find me elsewhere</div>
            <div class="socials">
                {#each socials as s}
                    <a
                        class="social"
                        style="--brand: {s.bg}"
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                    >
                        <span class="fill"></span>
                        <span class="icon"><SocialIcon icon={s.icon} /></span>
                    </a>
                {/each}
            </div>
        </div>

        <div class="copyright">
            <span>© {year} Kevin de Meijer</span>
            <span>the Netherlands</span>
            <a href="#top" class="back-to-top">Back to top ↑</a>
        </div>
    </div>
</footer>

<style>
    .mondriaan-strip {
        display: flex;
        height: 16px;
        width: 100%;
    }

    footer {
        background: #16150f;
        color: #f3f2ec;
        padding: clamp(80px, 14vh, 170px) 0 40px;
    }

    .wrap {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 clamp(20px, 5vw, 72px);
    }

    .eyebrow {
        display: flex;
        align-items: center;
        gap: 11px;
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.74rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #76766f;
    }

    .dot {
        width: 12px;
        height: 12px;
        background: var(--red);
        display: block;
        flex: 0 0 auto;
    }

    h2 {
        margin: 20px 0 0;
        font-size: clamp(2rem, 5vw, 3.8rem);
        font-weight: 500;
        letter-spacing: -0.03em;
        line-height: 1;
    }

    .email {
        display: inline-block;
        margin-top: clamp(24px, 4vh, 40px);
        font-size: clamp(1.4rem, 4vw, 3rem);
        font-weight: 400;
        letter-spacing: -0.02em;
        text-decoration: none;
        color: #f3f2ec;
        background-image: linear-gradient(var(--blue), var(--blue));
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: 100% 2px;
        padding: 2px 6px 8px;
        transition:
            background-size 0.4s ease,
            color 0.4s ease;
    }

    .email:hover {
        background-size: 100% 100%;
        color: #ffffff;
    }

    .socials-block {
        margin-top: clamp(50px, 8vh, 90px);
    }

    .find-label {
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #76766f;
        margin-bottom: 18px;
    }

    .socials {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .social {
        position: relative;
        display: block;
        width: 54px;
        height: 54px;
        border: 2px solid #16150f;
        overflow: hidden;
        background: #f3f2ec;
    }

    .social .fill {
        position: absolute;
        inset: 0;
        background: var(--brand);
        transform: translateY(101%);
        transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 1;
    }

    .social:hover .fill {
        transform: translateY(0);
    }

    .social .icon {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #16150f;
        transition: color 0.42s;
        z-index: 2;
    }

    .social:hover .icon {
        color: #fff;
    }

    @media (max-width: 600px) {
        .social {
            width: 48px;
            height: 48px;
        }
    }

    .copyright {
        margin-top: clamp(56px, 10vh, 110px);
        padding-top: 26px;
        border-top: 1px solid #2c2b23;
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.68rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #76766f;
    }

    .back-to-top {
        text-decoration: none;
        color: #76766f;
        background-image: linear-gradient(var(--blue), var(--blue));
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: 100% 1.5px;
        padding: 2px 5px;
        transition:
            background-size 0.35s ease,
            color 0.35s ease;
    }

    .back-to-top:hover {
        background-size: 100% 100%;
        color: #ffffff;
    }
</style>
