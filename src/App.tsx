// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';
import React from 'react';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<KakaoLogin />} />
      <Route path="/api/oauth/kakao" element={<KakaoRedirectHandler />} />
    </Routes>
  );
};

export default App;
