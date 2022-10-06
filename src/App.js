import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import UserSettingsPage from './components/UserSettingsPage';
import { AuthProvider } from './contexts/AuthContext';
import { DBProvider } from './contexts/DBContext'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      maxHeight: '100%',
      backgroundAttachment: 'fixed',
      backgroundImage: `url(${process.env.PUBLIC_URL + 'images/Josh.jpg'})`,
      backgroundSize: '100vh auto',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
  }} >
      <AuthProvider>
        <DBProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/userSettings' element={<UserSettingsPage />} />
          </Routes>
        </DBProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
