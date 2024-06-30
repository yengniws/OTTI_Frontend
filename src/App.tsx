import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding/OnBoarding';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
    </Routes>
  );
};

export default App;
