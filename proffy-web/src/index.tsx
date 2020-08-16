/* Permite usarmos JSX */
import React from 'react';

/* Permite o React executar no DOM*/
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
