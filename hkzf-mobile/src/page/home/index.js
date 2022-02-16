import React from 'react';
import { Outlet } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.css'
// TabBar 数据
const tabItems = [
  {
    title: '首页',
    icon: 'icon-ind',
    path: '/home'
  },
  {
    title: '找房',
    icon: 'icon-findHouse',
    path: '/home/list'
  },
  {
    title: '资讯',
    icon: 'icon-infom',
    path: '/home/news'
  },
  {
    title: '我的',
    icon: 'icon-my',
    path: '/home/profile'
  }
]
export default class Home extends React.Component{
  state = {
    selectedTab: '/home',
  };
  setSelectedTab(){
    
  }
  // 渲染 TabBar.Item
  renderTabBarItem() {
    return tabItems.map(item => (
      <TabBar.Item title={item.title} key={item.title} icon={<i className={`iconfont ${item.icon}`} />} selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
            selectedTab: item.path
            })
            // // 路由切换
            // this.props.history.push(item.path)
          }}
        />
    ))
  }
  render(){
    return (
      <div className='home'>
        <TabBar tintColor="#21b97a" barTintColor="white" >
          {this.renderTabBarItem()}
        </TabBar>
    </div>
    )
  }
}