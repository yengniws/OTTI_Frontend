import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import EditMyPage from './pages/MyPage/EditMyPage';

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/editMyPage" element={<EditMyPage />} />
    </Routes>
  );
};

export default App;
