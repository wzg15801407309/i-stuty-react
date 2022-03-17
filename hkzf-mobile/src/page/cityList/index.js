import React, { useEffect }from 'react';
import { NavBar } from 'antd-mobile';
import { getCityList } from '../../https/cityhttp.js';
import { useNavigate } from 'react-router-dom'
import './index.less';
const CityList = () =>{
  const history = useNavigate();
  const goBackPage = ()=>{
    // 返回上一级菜单
    history(-1);
    // window.history.back(); 这个也可以实现
  }
  useEffect(()=>{
    getCityList({level:1}).then(res=>{
      console.log(res);
    })
  });
  return <div className='citylist'> 
    <NavBar  backArrow={<i className="iconfont icon-back" />} onBack={goBackPage}>城市列表</NavBar>
  </div>
}

export default CityList;