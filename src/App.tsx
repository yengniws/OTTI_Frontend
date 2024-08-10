import React from 'react';
import KakaoLogin from './components/KakaoLogin';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AddOttSubscription from './pages/AddOttSubscription/AddOttSubscription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Home from './pages/';
// import Community from './pages/';
// import Pot from './pages/';
// import Profile from './pages/';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<KakaoLogin />} />
        <Route path="/api/oauth/kakao" element={<KakaoRedirectHandler />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/main/addOttSubscription"
          element={<AddOttSubscription />}
        />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pot" element={<Pot />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
};

export default App;
