import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin />} />
    </Routes>
  );
};

export default App;
