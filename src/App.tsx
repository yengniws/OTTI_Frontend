import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubscriptionDetail from './pages/Main/SubscriptionDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/subscription-detail" element={<SubscriptionDetail />} />
    </Routes>
  );
};

export default App;
