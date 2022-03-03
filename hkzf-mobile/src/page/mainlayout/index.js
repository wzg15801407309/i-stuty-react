import React from 'react';
import  './index.less';

import { TabBar } from 'antd-mobile';
import { Outlet,useLocation, useNavigate} from 'react-router-dom'
const MainTabBar = ()=>{
  const history = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = value =>{
    history(value);
  }

  // TabBar 数据
  const tabList = [
    {
      key:"/",
      title: '首页',
      icon: 'icon-ind',
      path: '/Mainlayout'
    },
    {
      key:"/list",
      title: '找房',
      icon: 'icon-findHouse',
      path: '/Mainlayout/list'
    },
    {
      key:'/news',
      title: '资讯',
      icon: 'icon-infom',
      path: '/Mainlayout/news'
    },
    {
      key:'/profile',
      title: '我的',
      icon: 'icon-my',
      path: '/Mainlayout/profile'
    }
  ];

  return (
    <TabBar activeKey={ pathname } onChange={value=>setRouteActive(value)}>
      {tabList.map(item => (
        <TabBar.Item key={item.key} icon={<i className={`iconfont ${item.icon}`} /> } title={item.title} />
      ))}
    </TabBar>
  )
}
const Mainlayout= ()=>{
  return (
    <div className="mainlayout">
      <Outlet />
      <MainTabBar />
    </div>
  )
}
export default Mainlayout;