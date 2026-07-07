<script>
    import { onMount, onDestroy } from "svelte";
    import { theme } from "../theme.js";

    let clockText = $state("—");
    let timer;

    function formatAmsterdamTime() {
        try {
            return new Intl.DateTimeFormat("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Europe/Amsterdam",
            }).format(new Date());
        } catch (e) {
            return "";
        }
    }

    onMount(() => {
        const tick = () => (clockText = `${formatAmsterdamTime()} CET`);
        tick();
        timer = setInterval(tick, 15000);
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
        <a href="#top" class="logo">Kevin&nbsp;de&nbsp;Meijer</a>
        <nav>
            {#each navLinks as link}
                <a href={link.href} class="nav-link">{link.label}</a>
            {/each}
            <span class="clock">
                <span class="dot"></span>
                <span>{clockText}</span>
            </span>
            <button
                type="button"
                class="theme-toggle"
                aria-label="Toggle colour theme"
                title="Toggle colour theme"
                onclick={() => theme.toggle()}
            >
                {#if $theme === "dark"}
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="4.5" />
                        <line x1="12" y1="1.5" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="22.5" />
                        <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
                        <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
                        <line x1="1.5" y1="12" x2="4" y2="12" />
                        <line x1="20" y1="12" x2="22.5" y2="12" />
                        <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
                        <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
                    </svg>
                {:else}
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M20.742 13.045a8.5 8.5 0 0 1-10.787-10.787 0.75.75 0 0 0-.912-.912 10 10 0 1 0 12.611 12.611 0.75.75 0 0 0-.912-.912Z"
                        />
                    </svg>
                {/if}
            </button>
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
