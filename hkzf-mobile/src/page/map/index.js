import React,{ useEffect } from 'react';
import {Map, Marker, NavigationControl} from 'react-bmapgl';
import './index.less';
import NavHeader from '../../commponents/navheader';
const Maps = ()=>{
  // 获取当前的定位
  const {label,value} = JSON.parse(localStorage.getItem('hkzf_city'));
  useEffect(()=>{
    console.log(label,value);
  })
  return (
    <div className='maps'>
      <NavHeader>地图找房</NavHeader>
      <Map style={{ height: '100%' }}  zoom="11">
        {/* <Marker position={{lng: 116.402544, lat: 39.928216}} />
        <NavigationControl />  */}
      </Map>
    </div>
  )
}
export default Maps;