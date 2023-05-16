import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { TrackerProvider } from './src/provider';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TrackerProvider>
      <App />
    </TrackerProvider>
  </StrictMode>
);
