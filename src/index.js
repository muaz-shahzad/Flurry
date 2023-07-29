import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/style.css';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
        <App />
    </Layout>
  </React.StrictMode>
);
reportWebVitals();
