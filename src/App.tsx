import React from 'react';
import { Routes, Route } from 'react-router-dom';
import KakaoLogin from './components/KakaoLogin';
import Onboarding from './pages/Onboarding/OnBoarding';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';
import Login from './pages/Login/Login';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<KakaoLogin />} />
      <Route path="/oauth" element={<KakaoRedirectHandler />} />
    </Routes>
  );
};

export default App;
