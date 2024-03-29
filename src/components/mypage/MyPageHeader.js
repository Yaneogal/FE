import React from "react";
import "../../css/mypage.scss";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/module/user";
import MyProfile from "../../components/mypage/MyProfile";

const MyPageHeader = (props) => {
  const dispatch = useDispatch();
  const { leftArrowBlack, setup, navigate, myInfo, userInfo, is_userId } =
    props;

  const onClickLeftArrow = () => {
    navigate("/");
  };

  const onClickSetup = () => {
    navigate("/setup");
  };

  return (
    <div className="mypageHeader">
      <div className="mypageHeaderItemsWrap">
        <div className="mypageHeaderLeft">
          <div className="leftArrowBlack" onClick={onClickLeftArrow}>
            <img src={leftArrowBlack} alt="leftArrow" />
          </div>
          {(userInfo && userInfo.mine) || (myInfo && myInfo.mine) ?
          <div className="myPageTitle">마이페이지</div>
          :
          <div className="myPageTitle">{userInfo&&userInfo.nickname}님의 페이지</div>
          }
        </div>
        {(userInfo && userInfo.mine) || (myInfo && myInfo.mine) ? (
          <div className="mypageHeaderRight">
            <div className="myProfileLogout">
              <button
                className="logout-btn"
                onClick={() => dispatch(userAction.logOutDB())}
              >
                로그아웃
              </button>
            </div>
            <img
              src={setup}
              className="setup"
              alt="환경설정"
              onClick={onClickSetup}
            />
          </div>
        ) : null}
      </div>
      {/* 나의 프로필 */}
      <MyProfile myInfo={myInfo} userInfo={userInfo} is_userId={is_userId} />
    </div>
  );
};
export default MyPageHeader;
