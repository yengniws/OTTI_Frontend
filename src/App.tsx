import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AddOttSubscription from './pages/AddOttSubscription/AddOttSubscription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route
          path="/main/addOttSubscription"
          element={<AddOttSubscription />}
        />
      </Routes>
    </>
  );
};

export default App;
