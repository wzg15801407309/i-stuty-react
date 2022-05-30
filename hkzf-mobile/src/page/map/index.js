import React,{ useEffect,useState } from 'react';
import './index.less';
import NavHeader from '../../commponents/navheader';
import DetailsList from './detailslist';
import { getHouseCityMsg,getcommunityCityMsg } from '../../https/cityhttp.js';
const BMapGL = window.BMapGL;
// 覆盖物样式
const labelStyle = {
  cursor: 'pointer',
  border: '0px solid rgb(255, 0, 0)',
  padding: '0px',
  whiteSpace: 'nowrap',
  fontSize: '12px',
  color: 'rgb(255, 255, 255)',
  textAlign: 'center',
  background:'none'
}
const Maps = ()=>{
  let mapInitObj;
  const [isShowList, setIsShowList] = useState(false);
  const [upObj, setUpObj] = useState({});
  useEffect(()=>{initMap();},[]);
  const initMap = ()=>{
    // 获取当前的定位
    const {label,value} = JSON.parse(localStorage.getItem('hkzf_city'));
    // 初始化地图实例
    const myMap = new BMapGL.Map('container');
    // 地图实例在其他地方掉用
    mapInitObj = myMap
    // 创建地址解析起实例
    const myGeo = new BMapGL.Geocoder();
    myGeo.getPoint(label, point=>{
      if(point){
        // 初始化地图
        myMap.centerAndZoom(point, 11);
        myMap.addControl(new BMapGL.Marker(point, {title: label}))
        // 添加常用控件
        myMap.addControl(new BMapGL.ScaleControl())
        myMap.addControl(new BMapGL.ZoomControl())
        // 调用 renderOverlays 方法
        renderOverlays(value)
      }else{
        alert('您选择的地址没有解析到结果！');
      }
    },label);
  }
  const renderOverlays  = (key)=>{
    const {nextZoom, type} = getTypeAndZoom();
    getHouseCityMsg({id:key}).then(res=>{
      const list = res.body;
      list.forEach(element => {
        createOverlays(element,nextZoom,type);
      });
    })
  }
  /**创建一般覆盖物 */
  const createOverlays = (data,zoom,type)=>{
    const { coord: {latitude, longitude},label:areaName,count,value} = data;
    /**创建坐标对象 */
    const areaPoint = new BMapGL.Point(longitude,latitude);
    if(type === 'circle' ){// 区 和镇创建
      createCircle(areaPoint,areaName,count,value,zoom);
    }else{// 小区创建
      createRect(areaPoint,areaName,count,value);
    }
  }
  const createCircle = (point,name,count,id,zoom)=>{
    /**创建覆盖物 */
    const label = new BMapGL.Label('',{
      position:point,
      offset:new BMapGL.Size(-35,-35)
    });
    label.id = id;
    label.setContent(`
      <div class="bubble">
        <p class='name'>${name}</p>
        <p>${count}套</p>
      </div>
    `);
    // 设置样式
    label.setStyle(labelStyle);
    label.addEventListener('click', () => {
      // 调用 renderOverlays 方法，获取该区域下的房源数据
      renderOverlays(id)
      // 放大地图，以当前点击的覆盖物为中心放大地图
      mapInitObj.centerAndZoom(point, zoom)
      // 清除当前覆盖物信息
      mapInitObj.clearOverlays()
    })
    mapInitObj.addOverlay(label);
  }
  const createRect = (point,name,count,id)=>{
      // 创建覆盖物
      const label = new BMapGL.Label('', {
        position: point,
        offset: new BMapGL.Size(-50, -28)
      });
      // 给 label 对象添加一个唯一标识
      label.id = id;
          // 设置房源覆盖物内容
      label.setContent(`
        <div class="rect">
          <span class="housename">${name}</span>
          <span class="housenum">${count}套</span>
          <i class=arrow></i>
        </div>
      `)
      // 设置样式
      label.setStyle(labelStyle)

      // 添加单击事件
      label.addEventListener('click', e => {
        setIsShowList(true);
        // this.getHousesList(id)
        console.log('.......显示具体的房源信息');
        getCommunityListings(id);
      })
    // 添加覆盖物到地图中
    mapInitObj.addOverlay(label);
  };
  /**获取小区的房源列表 */
  const getCommunityListings = id =>{
    getcommunityCityMsg({cityId:id}).then(res=>{
      setUpObj(res.body);
    })
  }
  /**
   * 计算要绘制的覆盖物类型和下一个缩放级别
   * @returns {nextZoom,type}
   * 区： 11，范围 >= 10  < 12
   * 镇：13， 范围 >=12 < 14
   * 小区：15，范围 >= 14 < 16
   */
  const getTypeAndZoom = () => {
    // 调用地图的 getZoom()方法，来获取当前缩放级别
    const zoom = mapInitObj.getZoom();
    let nextZoom, type;
    if (zoom >= 10 && zoom < 12) {
      // 区 下一个缩放级别
      nextZoom = 13
      // circle 表示绘制圆形覆盖物（区、镇）
      type = 'circle';
    } else if (zoom >= 12 && zoom < 14) {
      // 镇
      nextZoom = 15
      type = 'rect';
    } else if (zoom >= 14 && zoom < 16) {
      // 小区
      type = 'rect';
    }
    return {nextZoom,type}
  }
  return (
    <div className='maps'>
      <NavHeader>地图找房</NavHeader>
      {/* 地图找房 */}
      {/* 地图容器元素 */}
      <div id="container" className="container" />
      {/* 房源列表 */}
      <DetailsList  isShowList={isShowList} upObj = {upObj}/>
    </div>
  )

}
export default Maps;