import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles.css';
import App from './Application';


const Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
Root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


