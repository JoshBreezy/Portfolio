import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeskNav from './components/DeskNav';
import MobNav from './components/MobNav';
import Main from './components/Main';
import UserSettingsPage from './components/UserSettingsPage';
import BlogHome from './components/BlogsPage/BlogHome';
import NewBlog from './components/BlogsPage/NewBlog';
import DisplayBlog from './components/BlogsPage/DisplayBlog';
import { Route, Routes } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

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
      }}>
      { isMobile? <MobNav /> : <DeskNav />}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/userSettings' element={<UserSettingsPage />} />
        <Route path='/blogs' element={<BlogHome />} />
        <Route path='/newblog' element={<NewBlog />} />
        <Route path='/blogs/:key' element={<DisplayBlog />} />
      </Routes>
    </div>
  );
}

export default App;
