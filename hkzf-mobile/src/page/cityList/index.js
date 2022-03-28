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
   useEffect(()=>{
    // 优化
    Promise.all([getCityList({level:1}),getHotCity(),getCurrentCity()]).then(values=>{
      console.log('Promiseall',values);
      const listObj = handleData(values[0].body);
      const keys = Object.keys(listObj).sort();
      listObj['hot'] = values[1].body;
      keys.unshift('hot'); 
      setCityListObj(listObj);
      setCityKey(keys);
      console.log(keys);
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