import React from 'react';
import ReactDOM from 'react-dom';
import "./packages/ui-kit/src/assets/css/bootstrap.min.css";
import "./packages/ui-kit/src/assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "./packages/ui-kit/src/assets/demo/demo.css";
import './index.css';
import App from './components/app/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
