<script>
    import { onMount, onDestroy } from "svelte";
    import { link } from "svelte-spa-router";
    import ThemeToggle from "./ThemeToggle.svelte";

    let { focus = false } = $props();

    let clockText = $state("—");
    let timer;

    function formatAmsterdamTime() {
        try {
            return new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                timeZone: "Europe/Amsterdam",
            }).format(new Date());
        } catch (e) {
            return "";
        }
    }

    onMount(() => {
        if (focus) return;
        const tick = () =>
            (clockText = `It's ${formatAmsterdamTime()} in Amsterdam`);
        tick();
        timer = setInterval(tick, 1000);
    });

    onDestroy(() => clearInterval(timer));

    const navLinks = [
        { href: "#work", label: "Experience" },
        { href: "#about", label: "About" },
        { href: "#craft", label: "Craft" },
        { href: "#studies", label: "Education" },
    ];
</script>

<header>
    <div class="bar">
        {#if focus}
            <a href="/" use:link class="logo">Kevin&nbsp;de&nbsp;Meijer</a>
        {:else}
            <a href="#top" class="logo">Kevin&nbsp;de&nbsp;Meijer</a>
        {/if}
        <nav>
            {#if !focus}
                {#each navLinks as navLink}
                    <a href={navLink.href} class="nav-link">{navLink.label}</a>
                {/each}
                <span class="clock">
                    <span class="dot"></span>
                    <span>{clockText}</span>
                </span>
            {/if}
            <ThemeToggle />
        </nav>
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
        flex-wrap: wrap;
    }

    .logo {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.02rem;
        letter-spacing: -0.01em;
        color: var(--text);
    }

    nav {
        display: flex;
        align-items: center;
        gap: clamp(14px, 2vw, 28px);
        flex-wrap: wrap;
        font-family: "Geist Mono", ui-monospace, monospace;
        font-size: 0.72rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .nav-link {
        text-decoration: none;
        color: var(--text-mid);
        background-image: linear-gradient(var(--ink), var(--ink));
        background-repeat: no-repeat;
        background-position: 0 100%;
        background-size: 100% 0%;
        padding: 2px 5px;
        transition:
            background-size 0.3s ease,
            color 0.3s ease;
    }

    .nav-link:hover {
        background-size: 100% 100%;
        color: var(--page);
    }

    .clock {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--text-faint);
    }

    .dot {
        width: 8px;
        height: 8px;
        background: var(--red);
        display: inline-block;
    }
</style>
