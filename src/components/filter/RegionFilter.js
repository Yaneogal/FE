import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../../redux/module/post";
import "../../css/regionFilter.scss";

const RegionFilter = ({ onClick }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);

  const area = [
    "서울",
    "경기",
    "인천",
    "강원도",
    "충청도",
    "전라도",
    "경상도",
    "대전",
    "세종",
    "대구",
    "울산",
    "광주",
    "부산",
    "제주도",
  ];

  useEffect(() => {
    dispatch(userAction.initPagingDB());
  }, []);

  return (
    <div className="regionfilter-container">
      <div className="regionfilter-content">
        <div className="regionfilter-title">
          <p>어디로 떠나볼까요?</p>
        </div>
        <div className="area-list">
          {area.map((region, i) => (
            <button
              onClick={() => {
                navigate("/filter/" + region);
                onClick();
                setColor(!color);
                dispatch(userAction.initPagingDB());
              }}
              className={color ? "table_btn_s" : "table_btn_ns"}
              key={i}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionFilter;
