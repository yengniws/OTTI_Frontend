import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AddOttSubscription from './pages/AddOttSubscription/AddOttSubscription';

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/main/addOttSubscription" element={<AddOttSubscription />} />
    </Routes>
  );
};

export default App;
