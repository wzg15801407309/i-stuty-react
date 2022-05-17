import React,{ useEffect,useState } from 'react';
import {Map, NavigationControl,ZoomControl,ScaleControl,Label} from 'react-bmapgl';
import './index.less';
import NavHeader from '../../commponents/navheader';
import { getHouseCityMsg } from '../../https/cityhttp.js';

const Maps = ()=>{
  const [point, setPoint] = useState({});
  const [houseList, setHouseList] = useState([]);
 
  useEffect(()=>{
    initMap();
    // // 获取当前的定位
    // const {label,value} = JSON.parse(localStorage.getItem('hkzf_city'));
    // /**获取房源信息 */
    // getHouseCityMsg({id:value}).then(res=>{
    //     setHouseList(res.body);
    // });
    // //创建地址解析器实例
    // const myGeo = new  window.BMapGL.Geocoder();
    // // 将地址解析结果显示在地图上，并调整地图视野
    // myGeo.getPoint(label, function(point){
    //   if(point){
    //     setPoint(point);
    //   }else{
    //       alert('您选择的地址没有解析到结果！');
    //   }
    // }, label);
  },[]);
  /**初始化地图 */
  const initMap = ()=>{
    const map = window.BMapGL;
    // 获取当前的定位
    const {label,value} = JSON.parse(localStorage.getItem('hkzf_city'));
     //创建地址解析器实例
    const mapMy = new map.Map('container');
    const myGeo = new  map.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(label, function(point){
      if(point){
        mapMy.centerAndZoom(point, 11);
        mapMy.addOverlay(new map.Marker(point, {title: label}))
          
        // 添加比例尺和平移缩放控件
        // 使用Map.addControl()方法向地图添加控件
        mapMy.addControl(new map.ScaleControl)
        mapMy.addControl(new map.ZoomControl)
      }else{
          alert('您选择的地址没有解析到结果！');
      }
    }, label);
        
      /**获取房源信息 */
      getHouseCityMsg({id:value}).then(res=>{
       const houseList = res.body;
       console.log('房源列表',houseList);

       houseList.forEach(item => {
        const {coord: {latitude, longitude}, label: areaname, count, value} = item;
        const areaPoint = new map.Point(longitude, latitude);
        const opts = {
          position: areaPoint,    // 指定文本标注所在的地理位置
          offset: new map.Size(-35, -35)//设置文本偏移量
        }
        //创建了一个Label对像
        const Label = new map.Label(areaname, opts);
        // 给label添加唯一的标识
        Label.id = value;
        // 自定义房源覆盖物（设置label的内容）
        Label.setContent(`
          <div class="bubble">
            <p>${areaname}</p>
            <p>${count}套</p>
          </div>
        `);
        Label.setStyle({
          width:'70px',
          height:"70px",
          display: "flex",
          border: '2px solid rgb(255, 255, 255)',
          padding: '0px',
          background: "rgba(12, 181, 106, 0.9)",
          color:"rgb(255, 255, 255)",
          "align-items": "center",
          "justify-content": "center",
          "border-radius": "100%",
        });
        mapMy.addControl(Label)
       });
      });
  }
  return (
    <div className='maps'>
      <NavHeader>地图找房</NavHeader>
      {/* 地图找房 */}
      {/* 地图容器元素 */}
      <div id="container" className="container" />
    </div>
  )
}
export default Maps;