import React from 'react';
import './App.css';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './contexts/AuthContext';
import { DBProvider } from './contexts/DBContext'

function App() {
  return (
    <>
      <AuthProvider>
        <DBProvider>
          <Main />
        </DBProvider>
      </AuthProvider>
    </>
  );
}

export default App;
