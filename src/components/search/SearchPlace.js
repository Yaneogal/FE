import React from "react";
import "../../css/post.scss";

const SearchPlace = (props) => {
  const {
    inputText,
    Places,
    search,
    setSelect,
    select,
    list,
    setImgUrl,
    setAllImgUrl,
    onClickHandler,
    searchedPlaces,
    setSearchedPlaces,
    handleSubmit,
    onChange
  } = props;

  // 장소 선택하기
  const onSelectPlace = (e, i, item, place_name) => {
    if (e.target.checked) {
      setSelect((pre) => {
        const selectList = [...pre];
        const newData = { ...Places[i], imgCount: 0 };
        selectList.push(newData);
        list(selectList);
        return selectList;
      });
      setImgUrl((pre) => {
        const imgUrlList = [...pre];
        const newData = { place_name: place_name, imgUrl: [] };
        imgUrlList.push(newData);
        return imgUrlList;
      });
      setAllImgUrl((pre) => {
        const imgUrlList = [...pre];
        const newData = { place_name: place_name, imgUrl: [] };
        imgUrlList.push(newData);
        return imgUrlList;
      });
    }
  };

  return (
    <div className="writeSearchNresult">
      {/* 검색창 */}
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="위치를 검색해주세요"
          onChange={onChange}
          value={inputText}
        />
        <button type="submit">
          <img src={search} alt="검색 아이콘" />
        </button>
      </form>

      {/* 검색목록*/}
      <div
        className="searchList_wrap"
        id="searchList_wrap"
      >
        <div id="result-list">
          {Places.map((item, i) => (
            <label htmlFor={item.id} key={i}>
              <div style={{ marginTop: "20px" }}>
                <span>{i + 1}</span>
                <div>
                  <h3>{item.place_name}</h3>
                  {item.road_address_name ? (
                    <div>
                      <span>{item.road_address_name}</span>
                      <br />
                      <span>{item.address_name}</span>
                    </div>
                  ) : (
                    <span>{item.address_name}</span>
                  )}
                  <span>{item.phone}</span>
                </div>
                <div className="select">
                  <input
                    type="checkbox"
                    value={item.id}
                    id={item.id}
                    checked={select.includes(item) ? true : false}
                    onChange={(e) => {
                      if(e.target.clicked){
                        onClickHandler(item.place_name);
                        const place_name = item.place_name;
                        onSelectPlace(e, i, item, place_name);
                        setSearchedPlaces(false)
                        console.log(searchedPlaces)
                      }
                
                    }}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </label>
          ))}
          <div id="pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchPlace;