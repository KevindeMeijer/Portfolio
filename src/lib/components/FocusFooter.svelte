<script>
    import { link } from "svelte-spa-router";

    const year = new Date().getFullYear();
</script>

<footer>
    <div class="wrap">
        <span>© {year} Kevin de Meijer</span>
        <a class="mail" href="mailto:portfolio@devmeijer.com"
            >portfolio@devmeijer.com</a
        >
        <a class="back" href="/" use:link>← Back to index</a>
    </div>
</footer>

<style>
    footer {
        border-top: 1px solid var(--line);
    }

    .wrap {
        max-width: 1280px;
        margin: 0 auto;
        padding: 26px clamp(20px, 5vw, 72px);
        display: flex;
        gap: 18px;
        flex-wrap: wrap;
        justify-content: space-between;
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.68rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--text-muted);
    }

    .mail,
    .back {
        text-decoration: none;
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

    .mail:hover,
    .back:hover {
        background-size: 100% 100%;
        color: var(--page);
    }
</style>
