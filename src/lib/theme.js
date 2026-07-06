import { writable } from 'svelte/store';

const STORAGE_KEY = 'kdm-theme';

function createThemeStore(defaultTheme = 'light') {
  let initial = defaultTheme;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') initial = saved;
  } catch (e) {
    /* localStorage unavailable */
  }

  const { subscribe, set, update } = writable(initial);

  subscribe((value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
      document.documentElement.setAttribute('data-theme', value);
      document.documentElement.style.colorScheme = value;
    } catch (e) {
      /* localStorage / DOM unavailable */
    }
  });

  return {
    subscribe,
    set,
    toggle: () => update((t) => (t === 'dark' ? 'light' : 'dark')),
  };
}

export const theme = createThemeStore();
