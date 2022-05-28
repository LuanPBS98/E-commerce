import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorModeScript />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>
);