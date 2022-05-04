import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MarkdownContextProvider } from './MarkdownContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MarkdownContextProvider>
      <App />
    </MarkdownContextProvider>
  </React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
