import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  );
}

export default App;
