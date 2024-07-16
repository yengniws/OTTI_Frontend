import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import EditProfile from './pages/MyPage/EditProfile';

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/myPage/editProfile" element={<EditProfile />} />
    </Routes>
  );
};

export default App;
