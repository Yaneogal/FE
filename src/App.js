import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./redux/module/user";
import MyPage from "./pages/Mypage";
import About from "./pages/About";
import Setup from "./pages/Setup";
import Write from "./pages/Write";
import Search from "./pages/Search";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import KakaoSocial from "./pages/KakaoSocial";
import KakaoTraffic from "./pages/KakaoTraffic";

function App() {
  const dispatch = useDispatch();

  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(`${process.env.REACT_APP_KAKAO_KEY}`);
    }
  }

  useEffect(() => {
    dispatch(userAction.myInfoDB());
  }, [dispatch]);

  const myInfo = useSelector((state) => state.user.myinfo);

  return (
    <div className="App">
      <Routes>
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao/callback" element={<KakaoSocial />} />
        <Route path="/write" element={<Write myInfo={myInfo} />} />
        <Route path="/write/:id" element={<Write myInfo={myInfo} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/:id/kakaomap" element={<KakaoTraffic />} />
        <Route path="/mypage" element={<MyPage myInfo={myInfo} />} />
        <Route path="/mypage/:userId" element={<MyPage />} />
        <Route path="/setup" element={<Setup myInfo={myInfo} />} />
      </Routes>
    </div>
  );
}

export default App;
