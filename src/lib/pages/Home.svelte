<script>
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import FactsStrip from '../components/FactsStrip.svelte';
  import Experience from '../components/Experience.svelte';
  import About from '../components/About.svelte';
  import Craft from '../components/Craft.svelte';
  import Photography from '../components/Photography.svelte';
  import StudiesAndCerts from '../components/StudiesAndCerts.svelte';
  import Footer from '../components/Footer.svelte';
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
