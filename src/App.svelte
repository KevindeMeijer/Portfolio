<script>
  import Router from 'svelte-spa-router';
  import Home from './lib/pages/Home.svelte';
  import WorkDetail from './lib/pages/WorkDetail.svelte';
  import PhotographyDetail from './lib/pages/PhotographyDetail.svelte';

  const routes = {
    '/': Home,
    '/work/:slug': WorkDetail,
    '/photography/:slug': PhotographyDetail,
    // Unknown routes fall back to the home page.
    '*': Home,
  };
</script>

<Router {routes} />
