export const registerServiceWorker = () => {
  if (!('serviceWorker' in navigator) || !import.meta.env.PROD) {
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .catch((error) => {
        if (import.meta.env.DEV) {
          console.warn('Service worker registration failed', error);
        }
      });
  });
};
