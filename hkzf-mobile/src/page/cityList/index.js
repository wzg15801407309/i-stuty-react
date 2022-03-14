import React from 'react';
import { NavBar } from 'antd-mobile';
import './index.less';
const CityList = () =>{
  const goBackPage = ()=>{
    window.history.back()
  }
  return <div className='citylist'> 
    <NavBar  backArrow={<i className="iconfont icon-back" />} onBack={goBackPage}>城市列表</NavBar>
  </div>
}

export default CityList;