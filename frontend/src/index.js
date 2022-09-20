import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Logic from "./Logic";
import {DataFrame} from "dataframe-js";
import styles from './styles.css'
const axios = require('axios').default;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


