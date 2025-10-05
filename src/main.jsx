import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initializeI18n } from './i18n';
import { registerServiceWorker } from './serviceWorkerRegistration';

const mountReactApp = async () => {
  await initializeI18n();
  registerServiceWorker();

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

mountReactApp();
