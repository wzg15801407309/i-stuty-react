import React from 'react';
import './index.css';

import { TabBar } from 'antd-mobile';
const MainTabBar = ()=>{
  // TabBar 数据
  const tabList = [
    {
      key:"index",
      title: '首页',
      icon: 'icon-ind',
      path: '/Mainlayout'
    },
    {
      key:"findhouse",
      title: '找房',
      icon: 'icon-findHouse',
      path: '/Mainlayout/list'
    },
    {
      key:'news',
      title: '资讯',
      icon: 'icon-infom',
      path: '/Mainlayout/news'
    },
    {
      key:'profile',
      title: '我的',
      icon: 'icon-my',
      path: '/Mainlayout/profile'
    }
  ];
  return (
    <TabBar>
      {tabList.map(item => (
        <TabBar.Item key={item.key} icon={<i className={`iconfont ${item.icon}`} /> } title={item.title} />
      ))}
    </TabBar>
  )
}
const Mainlayout= ()=>{
  return (
    <div className="mainlayout">
      <div>body</div>
      <MainTabBar />
    </div>
  )
}
export default Mainlayout;