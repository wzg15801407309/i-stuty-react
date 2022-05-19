import React,{ useEffect,useState } from 'react';
import {Map,ZoomControl,ScaleControl,CustomOverlay} from 'react-bmapgl';
import './index.less';
import NavHeader from '../../../commponents/navheader';
import { getHouseCityMsg } from '../../../https/cityhttp.js';
const AreaHouseMsg = (props) =>{
  const { houseList } = props;
  const map =  window.BMapGL;
  const  handleClick = (event) =>{
    event.stopPropagation();
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.id);
  }
  return(
    houseList.length>0 && houseList.map(Item=>(
      (
        <CustomOverlay position={new map.Point(Item.coord.longitude,Item.coord.latitude)} key={Item.value} >
          <div className="bubble"  onClick={handleClick} id={Item.value}>
            <p className="name">{Item.label}</p>
             <p>{Item.count}套</p>
          </div>
        </CustomOverlay>
      )
    ))
  )
}
const Maps = ()=>{
  const [point, setPoint] = useState({});
  const [houseList, setHouseList] = useState([]);
  // 获取当前的定位
  useEffect(()=>{
    const {label,value} = JSON.parse(localStorage.getItem('hkzf_city'));
    /**获取房源信息 */
    getHouseCityMsg({id:value}).then(res=>{
        setHouseList(res.body);
    });
    //创建地址解析器实例
    const myGeo = new  window.BMapGL.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(label, function(point){
      if(point){
        setPoint(point);
      }else{
          alert('您选择的地址没有解析到结果！');
      }
    }, label);
  },[])
  return (
    <div className='maps'>
      <NavHeader>地图找房</NavHeader>
      <Map style={{ height: '100%' }}   center={new window.BMapGL.Point(point.lng,point.lat)}  zoom="11">
        <ZoomControl />
        <ScaleControl />
        {/* 自定义覆盖物 */}
        <AreaHouseMsg  houseList = {houseList}/>
      </Map>
    </div>
  )
}
export default Maps;