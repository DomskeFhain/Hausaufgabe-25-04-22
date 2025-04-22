import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Impressum from './Impressum';
import FAQ from './FAQ';
import Kontakt from "./Kontakt";
import About from "./About";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App></App>}></Route>
        <Route path="/contact" element={<Kontakt></Kontakt>}></Route>
        <Route path="/impressum" element={<Impressum></Impressum>}></Route>
        <Route path="/faq" element={<FAQ></FAQ>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
