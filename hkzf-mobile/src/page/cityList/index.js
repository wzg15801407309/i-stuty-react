import React, { useEffect,useState }from 'react';
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
  /** cityKey []*/
  const [cityKey, setCityKey] = useState();
  /** cityListObj {a:[{},{}]} */
  const [cityListObj, setCityListObj] = useState();
  useEffect(()=>{
    getCityList({level:1}).then(res=>{
      const obj=handleData(res.body);
    })
  },[]);
  /**数据处理 */
  const handleData = (data)=>{
    console.log(data);
    const tempobj = { };
    
    data.forEach(item => {
      const first = item.short.substr(0,1);
      if(tempobj[first]){
        tempobj[first].push(item);
      }else{
        tempobj[first] = [item];
      }
    });
    const tempkey  = Object.keys(tempobj);
    return {
      tempobj,
      tempkey
    }
  }
  return <div className='citylist'> 
    <NavBar  backArrow={<i className="iconfont icon-back" />} onBack={goBackPage}>城市列表</NavBar>
  </div>
}

export default CityList;