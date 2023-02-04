import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css'

import { ThemeProvider } from '@emotion/react'
import { theme } from './constants/index'

import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
