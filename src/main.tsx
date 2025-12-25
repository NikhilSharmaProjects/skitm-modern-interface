import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LogoLoader from './components/ui/LogoLoader';

const showLoader = () => {
  // Create a container for the loader
  const loaderDiv = document.createElement('div');
  loaderDiv.id = "app-loader";
  document.body.appendChild(loaderDiv);
  const root = createRoot(loaderDiv);
  root.render(<LogoLoader />);
  return loaderDiv;
};

const removeLoader = (loaderDiv: HTMLElement) => {
  loaderDiv.remove();
};

document.addEventListener('DOMContentLoaded', () => {
  // Show loader immediately
  const loaderDiv = showLoader();
  window.requestAnimationFrame(() => {
    const root = createRoot(document.getElementById("root")!);
    root.render(<App />);
    // Remove loader after the app has started rendering
    setTimeout(() => removeLoader(loaderDiv), 1800);
    // Register service worker for PWA support if available
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered:', registration);
        }).catch(registrationError => {
          console.log('SW registration failed:', registrationError);
        });
      });
    }
  });
});
