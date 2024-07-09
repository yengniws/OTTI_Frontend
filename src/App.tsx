import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import SubscriptionDetail from './pages/SubscriptionDetail/SubscriptionDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route
          path="/main/subscriptionDetail/:id"
          element={<SubscriptionDetail />} //경로 수정 필요
        />
      </Routes>
    </>
  );
};

export default App;
