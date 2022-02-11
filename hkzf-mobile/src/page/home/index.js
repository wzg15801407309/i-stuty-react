import React from 'react';
import { Outlet } from 'react-router-dom';

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <span>首页</span>
        <Outlet />
      </div>
    )
  }
}