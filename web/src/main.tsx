import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss';
import { isEnvBrowser } from './utils/misc';
import { TooltipProvider } from './components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = document.getElementById('root');
if (isEnvBrowser()) {
  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = 'cover';
  root!.style.backgroundRepeat = 'no-repeat';
  root!.style.backgroundPosition = 'center';
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: true,
    },
  },
});

createRoot(root!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider disableHoverableContent delayDuration={0}>
        <App />
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);