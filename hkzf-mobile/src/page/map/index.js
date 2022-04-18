import React,{ useEffect,useState } from 'react';
import {Map, Marker, NavigationControl,ZoomControl,ScaleControl,CustomOverlay} from 'react-bmapgl';
import './index.less';
import NavHeader from '../../commponents/navheader';
const DOtMsg = ()=>{
  return (
    <div className='rect' >
      <span className='housename'>上海</span>
      <span className='housenum'>50套</span>
      <i className='arrow'></i>
    </div>
  )
}
const Maps = ()=>{
  const {label,value} = JSON.parse(localStorage.getItem('hkzf_city'));
  const [point, setPoint] = useState({});
  // 获取当前的定位
  useEffect(()=>{
    //创建地址解析器实例
    const myGeo = new  window.BMapGL.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(label, function(point){
      if(point){
        console.log(point);
        setPoint(point);
      }else{
          alert('您选择的地址没有解析到结果！');
      }
    }, label)
  },[])
  return (
    <div className='maps'>
      <NavHeader>地图找房</NavHeader>
      <Map style={{ height: '100%' }}   center={new window.BMapGL.Point(point.lng,point.lat)}  zoom="11">
       
        <ZoomControl />
        <ScaleControl />
        <NavigationControl /> 

        {/* 自定义覆盖物 */}
        <CustomOverlay position={new window.BMapGL.Point(point.lng,point.lat)}>
          123 
        </CustomOverlay>
      </Map>
    </div>
  )
}
export default Maps;