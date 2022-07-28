import React, { useState } from 'react';
import '../../css/imageSlide.scss';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// 컴포넌트
import AddButton from "./AddButton"

const ImageSlide = ({setSelect, select, setImgUrl, imgUrl, imgs, l, j,setFocus, focus}) => {
  SwiperCore.use([Navigation]);
  const [img, setImg] = useState(0)
 
  // ------------------- 업로드 이미지 url로 바꿔서 미리보기 띄우기
  const loadImg = (e, index) => {
    const file = e.target.files[0];
    // imgs라는 배열 안에 첨부파일 모두 넣음
    imgs.push(file)
    const Url = URL.createObjectURL(file)
    // imgs라는 배열 안에 선택한 장소와 해당 첨부이미지넣음
    imgUrl[index].imgUrl.push(Url)
    setImg(Url)
    // select 배열 안의 imgCount가 imgUrl 배열 안의 이미지url 갯수
    select[index].imgCount = imgUrl[index].imgUrl.length
  }  

  return (
    <>
    {focus&&focus.length !== 0 ?
      <>
      <div className="writeImageContainerPerPlaceWrap"
      style={imgUrl&&imgUrl[j]&&imgUrl[j].imgUrl.length !== 0? {display:"flex"}:{display:"none"}}
      >
        <Swiper 
        style={{
          width : "100%",
          height: "256px",
        }}
        className="categoryslide-imagecontainer"
        spaceBetween= {10}
        navigation
        slidesPerView={1}
        breakpoints={{
          300: {
              slidesPerView: 1
          }}}>
        {imgUrl[j].imgUrl.map((list, i) => 
        <SwiperSlide 
          style={{
            width : "343px",
            height: "256px"
          }}
        className="write_categoryslide-imagecontent" key={i}>
          <img src={list} alt="장소이미지" style={{width:"343px"}}/>
        </SwiperSlide>
        )}
        </Swiper>
      </div>

      <AddButton j={j} l={l} loadImg={loadImg}/> 
    </>

    :

    <>
    <div className="writeImageContainerPerPlaceWrap">
      <Swiper 
      style={{
        width : "100%",
        height: "256px",
      }}
      className="categoryslide-imagecontainer"
      spaceBetween= {10}
      navigation
      slidesPerView={1}
      breakpoints={{
        300: {
            slidesPerView: 1
        }}}>
      {imgUrl[j].imgUrl.map((list, i) => 
      <SwiperSlide 
        style={{
          width : "343px",
          height: "256px"
        }}
      className="write_categoryslide-imagecontent" key={i}>
         <img src={list} alt="장소이미지" style={{width:"343px"}}/>
      </SwiperSlide>
      )}
      </Swiper>
    </div>

    <AddButton j={j} l={l} loadImg={loadImg}/>    
    
  </>
  }
</>
  )
}

export default ImageSlide