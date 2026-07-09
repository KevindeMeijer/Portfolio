export function reveal(node, params = {}) {
  // The hidden start state lives in global CSS keyed off [data-reveal];
  // stamping the attribute here is what actually arms the transition.
  node.setAttribute('data-reveal', '');

  let delay = params?.delay ?? 0;
  if (delay) node.style.transitionDelay = `${delay}ms`;

  const show = () => node.classList.add('is-visible');

  const reducedMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion || !('IntersectionObserver' in window)) {
    show();
    return {};
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show();
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );

  io.observe(node);
  const fallback = setTimeout(show, 1800);

  return {
    destroy() {
      io.disconnect();
      clearTimeout(fallback);
    },
  };
}
