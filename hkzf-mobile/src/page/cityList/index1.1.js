import React, { useEffect,useState }from 'react';
import { NavBar,IndexBar, List } from 'antd-mobile';

import { getCityList,getHotCity } from '../../https/cityhttp.js';
import { useNavigate } from 'react-router-dom';
import { getCurrentCity } from '../../utils'
import './index.less';
const CityList = () =>{
  const history = useNavigate();
  const goBackPage = ()=>{
    // 返回上一级菜单
    history(-1);
    // window.history.back(); 这个也可以实现
  }
  /** cityKey []*/
  const [cityKey, setCityKey] = useState([]);
  /** cityListObj {a:[{},{}]} */
  const [cityListObj, setCityListObj] = useState({});
  const [curCityObj, setCurCityObj] = useState({});
  /**当前城市 */
   useEffect(()=>{
    // 优化
    Promise.all([getCityList({level:1}),getHotCity(),getCurrentCity()]).then(values=>{
      console.log('Promiseall',values);
      const listObj = handleData(values[0].body);
      const keys = Object.keys(listObj).sort();
      listObj['hot'] = values[1].body;
      const curCity = values[2];
      console.log(curCity)
      keys.unshift('hot'); 
      setCityListObj(listObj);
      setCityKey(keys);
      setCurCityObj(curCity);
    });
    // old 
    // getCityList({level:1}).then(res =>{
    //   const listObj = handleData(res.body);
    //   const keys = Object.keys(listObj).sort();
    //   keys.unshift('hot');
    //   setCityKey(keys);
    //   getHotCity().then(hotres =>{
    //     listObj['hot'] = hotres.body;
    //     setCityListObj(listObj);
    //     getCurrentCity().then(res=>{
    //       listObj['#'] = res;
    //     });
    //   });
    // });
  },[]);
  /**数据处理 */
  const handleData = (data)=>{
    const tempobj = {};
    data.forEach(item => {
      const first = item.short.substr(0,1);
      if(tempobj[first]){
        tempobj[first].push(item);
      }else{
        tempobj[first] = [item];
      }
    });
    return  tempobj
  }
  return <div className='citylist'> 
    <NavBar  backArrow={<i className="iconfont icon-back" />} onBack={goBackPage}>城市列表</NavBar>
    {/* <div>{curCityObj.label}</div> */}
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        { cityKey&&cityKey.map(item => {
          const grous = cityListObj[item];
          return (
            <IndexBar.Panel index={item} title={`${item}`} key={`标题${item}`}>
              <List>
                {grous && grous.map((item, index) => (
                  <List.Item key={index}>{item.label}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>

  </div>
}

export default CityList;

/** 非常重要的知识点
 * 组件样式覆盖问题
 * 解决办法：css moudule / webpack css-loder /react支持
 * 创建的规则：
 * 1、命名：[name].moudule.css 的样式文件（React脚手架中的约定与普通的做区分）
 * 2、导入：import styles from '[name].moudule.css'
 * 3、使用：<div className={styles.[class名字]}></div> 
 * 4、最后生成的class: [组件名]_[name]_[随机]
 * 注意：1、不推荐使用嵌套的样式、
 *      2、如果是全局样式(前端框架的样式：Ant Design Mobile)，需要如下 :global(.an-navbar-title){} || .root :global(.an-navbar-title){}
 */