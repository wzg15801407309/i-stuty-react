import React from 'react';
import { Outlet } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import './index.css'
export default class Home extends React.Component{
  state = {
    selectedTab: 'redTab',
  };
  render(){
    return (
      <div className='home'>
        <TabBar tintColor="#21b97a" barTintColor="white" noRenderContent='true' >
          <TabBar.Item title="首页" key="Life" icon={<i className='iconfont icon-ind' />} selectedIcon={<i className='iconfont icon-ind' />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item  title="找房" key="Koubei" icon={<i className='iconfont icon-findHouse' />} selectedIcon={<i className='iconfont icon-findHouse' />}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item title="咨询" key="Friend" icon={<i className='iconfont icon-infom' />} selectedIcon={<i className='iconfont icon-infom' />}
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item title="我的" key="my" icon={<i className='iconfont icon-my' />}selectedIcon={<i className='iconfont icon-my' />}
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
    </div>
    )
  }
}