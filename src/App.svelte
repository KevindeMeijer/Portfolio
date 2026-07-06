<script>
  import Header from './lib/components/Header.svelte';
  import Hero from './lib/components/Hero.svelte';
  import FactsStrip from './lib/components/FactsStrip.svelte';
  import Experience from './lib/components/Experience.svelte';
  import About from './lib/components/About.svelte';
  import Craft from './lib/components/Craft.svelte';
  import Photography from './lib/components/Photography.svelte';
  import StudiesAndCerts from './lib/components/StudiesAndCerts.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div id="top">
  <Header />
  <Hero />
  <FactsStrip />
  <Experience />
  <About />
  <Craft />
  <Photography />
  <StudiesAndCerts />
  <Footer />
</div>

<style>
  #top {
    min-height: 100%;
    overflow-x: hidden;
  }
</style>
