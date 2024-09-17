import React from 'react';
import KakaoLogin from './components/KakaoLogin/KakaoLogin';
import KakaoRedirectHandler from './pages/KakaoLogin/KakaoRedirectHandler';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import AddOttSubscription from './pages/AddOttSubscription/AddOttSubscription';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Home from './pages/';
// import Community from './pages/';
// import Pot from './pages/';
import MyPage from './pages/MyPage/MyPage';
import EditProfile from './pages/MyPage/EditProfile';
import Onboarding from './pages/Onboarding/OnBoarding';
import Login from './pages/Login/Login';
import SubscriptionDetail from './pages/SubscriptionDetail/SubscriptionDetail';
import 'react-toastify/dist/ReactToastify.css';
import SubscriptionFeeDetail from './pages/Main/SubscriptionFeeDetail';
import Community from './pages/Community/Community';
import CommunityWrite from './pages/Community/CommunityWrite/CommunityWrite';
import CommunityList from './components/Community/CommunityList/CommunityList';
import CommunityDetail from './pages/Community/CommunityDetail/CommunityDetail';
import JoinPot from './pages/Community/JoinPot/JoinPot';
import CommunityPost from './components/Community/CommunityPost/CommunityPost';
import PotApplicationList from './pages/Pot/PotApplicationList';
import MyPotList from './pages/Pot/MyPotList';
import MakePot from './pages/Pot/MakePot';
import PotDetail from './pages/Pot/PotDetail';
// import PotMember from './pages/Pot/PotMember';

// import LoadingPage from './pages/Loading/LoadingPage';

// import { GlobalStyle } from './styles/Globalstyled';

const App: React.FC = () => {
  return (
    <>
      {/* <GlobalStyle /> */}
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
        {/* <Route path="/home" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pot" element={<Pot />} /> */}
        {/* <Route path="/profile" element={<MyPage />} /> */}
        <Route
          path="/main/subscriptionDetail/:id"
          element={<SubscriptionDetail />}
        />
        <Route
          path="/subscription-detail"
          element={<SubscriptionFeeDetail />}
        />
        {/* <Route path="/loading" element={<LoadingPage />} />  */}{' '}
        {/* 로딩 페이지 테스트 용 */}
        <Route path="/community" element={<Community />} />{' '}
        <Route path="/community-write" element={<CommunityWrite />} />{' '}
        <Route path="/detail/:id" element={<CommunityDetail />} />
        {/* <Route path="/community-post/:id" element={<CommunityPost />} /> */}
        <Route path="/joinpot" element={<JoinPot />} />
        <Route path="/PotApplicationList" element={<PotApplicationList />} />
        <Route path="/MyPotList" element={<MyPotList />} />
        <Route path="/MakePot" element={<MakePot />} />
        <Route path="/PotDetail" element={<PotDetail />} />
        {/* <Route path="/PotDetail/:potId" element={<PotDetail />} /> */}
        {/* 팟 통신용 경로 */}
        {/* <Route path="/PotMember" element={<PotMember />} /> */}
      </Routes>
    </>
  );
};

export default App;
