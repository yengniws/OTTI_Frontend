import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding/OnBoarding';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
