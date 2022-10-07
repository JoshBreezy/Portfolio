import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from './contexts/AuthContext';
import {DBProvider} from './contexts/DBContext';
import reportWebVitals from './reportWebVitals';
import './fonts/ShareTechMono-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DBProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DBProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
