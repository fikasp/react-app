import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';

const companyData = {
  email: "contact@example.com",
  city: "Warsaw"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header headerTitle="Welcome on page"/>
    <App />
    <Footer companyData={companyData}/>
  </React.StrictMode>
);

reportWebVitals();
