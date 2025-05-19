
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Wait for document to be ready before rendering the app
// This improves perceived performance by allowing the browser to load and parse HTML first
document.addEventListener('DOMContentLoaded', () => {
  // Use requestAnimationFrame for better performance
  window.requestAnimationFrame(() => {
    const root = createRoot(document.getElementById("root")!);
    root.render(<App />);

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
