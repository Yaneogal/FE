import React from "react";
import "../../css/placeModal.scss"

// 카카오맵
const { kakao } = window

const DetailPlaceModal = (props) => {
  const {showPlaceModal, closePlaceModal, data, setFocus, myMap} = props
    
  // 선택한 장소 핀찍기
  const panTo= (place) =>{
    const options = {
      center: new kakao.maps.LatLng(37.5666805, 126.9784147),
      level: 4,
    }
    const map = new kakao.maps.Map(myMap&&myMap.current, options)

    const markerPosition  = new kakao.maps.LatLng(place.y, place.x);
    map.panTo(markerPosition);   
    
    const marker = new kakao.maps.Marker({
      position: markerPosition
  });
    marker.setMap(map);
  }

  const onFocusPlaceHandler = (v) => {
    setFocus(v.place_name)
    panTo(v)
    closePlaceModal()
  }
  
  return(
    <div className={showPlaceModal ? 'openModal placeWrap' : 'placeWrap'}>
      {showPlaceModal ?
      <div className='background' onClick={closePlaceModal}>
        <div className='place_wrap' onClick={e => e.stopPropagation()}>
          <section>
            <div className="modalTitle">{data&&data.nickname}님의 추천 장소</div>
            <div className="placesWrap">
            {data&&data.place.map((v,i)=>{
              return(
                <div className="selectedPlaceDetail" key={i}
                onClick={()=>{onFocusPlaceHandler(v)}}
                >
                  <div className="selectedPlaceName">📍{v.place_name}</div>
                  <div className="selectedPlaceAddress">{v.address_name}</div>
                </div>  
              )
            })}
          </div>
            
            <div className="buttons">
              <div className="doneButton">
                <button className="close" onClick={closePlaceModal}>확인</button>
              </div>
            </div>  
          </section>
      </div>
      </div> : null}
    </div>
  )
}
export default DetailPlaceModal