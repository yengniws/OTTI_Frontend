import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

// import Home from './pages/';
// import Community from './pages/';
// import Pot from './pages/';
// import Profile from './pages/';

const App = () => {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />

      {/* <Route path="/home" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/pot" element={<Pot />} />
      <Route path="/profile" element={<Profile />} /> */}
    </Routes>
  );
};

export default App;
