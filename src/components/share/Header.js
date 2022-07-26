import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegionFilter from "../filter/RegionFilter";
import "../../css/header.scss";
import categoryMenu from "../../assets/categoryMenu.png";
import write from "../../assets/write.png";
import mypage from "../../assets/mypage.png";
import logoSmail from "../../assets/logo-smail.png";
import topArrow from "../../assets/topArrow.png";
import setup from "../../assets/setup.png";

const Header = () => {
  const navigate = useNavigate();

  const is_login = localStorage.getItem("token") ? true : false;

  const [viewCategory, setViewCategory] = useState(false);

  const onClick = () => {
    setViewCategory(!viewCategory);
  };

  return (
    <>
      {viewCategory ? <RegionFilter onClick={onClick} /> : null}
      <div className="header-container">
        <div className="header-content">
          <div className="header-image">
            {viewCategory ? (
              <img
                src={topArrow}
                alt="topArrow"
                className="topArrow-icon"
                onClick={onClick}
              />
            ) : (
              <img
                src={categoryMenu}
                alt="categoryMenu"
                className="categoryMenu-icon"
                onClick={onClick}
              />
            )}
            <div className="header-title" onClick={() => navigate("/")}>
              <img src={logoSmail} alt="logoSmail" className="logoSmail-icon" />
              <p>야너갈</p>
            </div>
            <div className="header-icon">
              {is_login ? (
                <img
                  src={write}
                  alt="write"
                  className="write-icon"
                  onClick={() => navigate("/write")}
                />
              ) : null}
              <img
                src={setup}
                alt="login"
                className="login-icon"
                onClick={() => navigate("/login")}
              />
              <img
                src={mypage}
                alt="mypage"
                className="mypage-icon"
                onClick={() => navigate("/mypage")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
