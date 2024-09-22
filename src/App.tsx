import React from 'react';
import KakaoLogin from './components/KakaoLogin/KakaoLogin';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AddOttSubscription from './pages/AddOttSubscription/AddOttSubscription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyPage from './pages/MyPage/MyPage';
import EditProfile from './pages/MyPage/EditProfile';
import Onboarding from './pages/Onboarding/OnBoarding';
import Login from './pages/Login/Login';
import SubscriptionDetail from './pages/SubscriptionDetail/SubscriptionDetail';
import 'react-toastify/dist/ReactToastify.css';
import SubscriptionFeeDetail from './pages/Main/SubscriptionFeeDetail';
import PotApplicationList from './pages/Pot/PotApplicationList';
import MyPotList from './pages/Pot/MyPotList';
import MakePot from './pages/Pot/MakePot';
import PotDetail from './pages/Pot/PotDetail';
import PotMember from './pages/Pot/PotMember';

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/api/oauth/kakao" element={<KakaoRedirectHandler />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myPage" element={<MyPage />} />
        <Route path="/myPage/editProfile" element={<EditProfile />} />
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/main/addOttSubscription"
          element={<AddOttSubscription />}
        />
        <Route
          path="/main/subscriptionDetail/:id"
          element={<SubscriptionDetail />}
        />
        <Route
          path="/subscription-detail"
          element={<SubscriptionFeeDetail />}
        />
        <Route path="/PotApplicationList" element={<PotApplicationList />} />
        <Route path="/MyPotList" element={<MyPotList />} />
        <Route path="/MakePot" element={<MakePot />} />
        <Route path="/PotDetail/:potId" element={<PotDetail />} />
        <Route path="/PotMember/:potId" element={<PotMember />} />
      </Routes>
    </>
  );
};

export default App;
