<script module>
    import moonRaw from "../icons/moon.svg?raw";
    import sunRaw from "../icons/sun.svg?raw";

    function parseGlyph(svgText) {
        const doc = new DOMParser().parseFromString(svgText, "image/svg+xml");
        const svg = doc.querySelector("svg");
        const viewBox = svg.getAttribute("viewBox") || "0 0 32 32";
        const markup = Array.from(svg.querySelectorAll("path, circle, rect"))
            .filter(
                (el) =>
                    el.getAttribute("class") !== "cls-1" &&
                    el.getAttribute("id") !== "_Transparent_Rectangle_",
            )
            .map((el) => el.outerHTML)
            .join("");
        return { viewBox, markup };
    }

    const moon = parseGlyph(moonRaw);
    const sun = parseGlyph(sunRaw);
</script>

<script>
    import { link } from "svelte-spa-router";
    import { theme } from "../theme.js";
</script>

<header>
    <div class="bar">
        <a href="/" use:link class="logo">Kevin&nbsp;de&nbsp;Meijer</a>
        <button
            type="button"
            class="theme-toggle"
            aria-label="Toggle colour theme"
            title="Toggle colour theme"
            onclick={() => theme.toggle()}
        >
            {#if $theme === "dark"}
                <svg
                    viewBox={sun.viewBox}
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    {@html sun.markup}
                </svg>
            {:else}
                <svg
                    viewBox={moon.viewBox}
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    {@html moon.markup}
                </svg>
            {/if}
        </button>
    </div>
</header>

<style>
    header {
        position: sticky;
        top: 0;
        z-index: 50;
        background: var(--header-bg);
        backdrop-filter: saturate(180%) blur(12px);
        -webkit-backdrop-filter: saturate(180%) blur(12px);
        border-bottom: 1px solid var(--line);
    }

    .bar {
        max-width: 1280px;
        margin: 0 auto;
        padding: 16px clamp(20px, 5vw, 72px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
    }

    .logo {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.02rem;
        letter-spacing: -0.01em;
        color: var(--text);
    }

    .theme-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        padding: 0;
        background: transparent;
        border: 1.5px solid var(--ink);
        border-radius: 0;
        color: inherit;
        cursor: pointer;
        transition:
            background 0.3s ease,
            color 0.3s ease;
    }

    .theme-toggle:hover {
        background: var(--ink);
        color: var(--page);
    }
</style>
