import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// MUST import your global CSS file here for Tailwind and fonts to work!
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);