import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import { isEnvBrowser } from './utils/misc';
import { store } from './store';
import { TooltipProvider } from './components/ui/tooltip';

const root = document.getElementById('root');

if (isEnvBrowser()) {
  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

createRoot(root!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TooltipProvider disableHoverableContent delayDuration={0}>
        <App />
      </TooltipProvider>
    </Provider>
  </React.StrictMode>
);