import React, { useEffect,useState,useRef }from 'react';
import { NavBar,Toast } from 'antd-mobile';
// 导入 List 组件
import { List, AutoSizer } from 'react-virtualized';
import { getCityList,getHotCity } from '../../https/cityhttp.js';
import { useNavigate } from 'react-router-dom';
import { getCurrentCity } from '../../utils'
import './index.less';
// 索引（A、B等）的高度
const TITLE_HEIGHT = 36;
// 每个城市名称的高度
const NAME_HEIGHT = 50;
// 有房源的城市
const HOUSE_CITY = ['北京', '上海', '广州', '深圳']
/**封装处理字母索引的方法 */
const formatCityIndex = letter => {
  if(letter){
    switch (letter) {
      case '#':
        return '当前定位'
      case 'hot':
        return '热门城市'
      default:
        return letter.toUpperCase()
    }
  }
}
const CityList = () =>{
  const history = useNavigate();
  const goBackPage = ()=>{
    // 返回上一级菜单
    history(-1);
    // window.history.back(); 这个也可以实现
  }
  const cityRef = useRef(null);
  /** cityKey []*/
  const [cityKey, setCityKey] = useState([]);
  /** cityListObj {a:[{},{}]} */
  const [cityListObj, setCityListObj] = useState({});
  /**当前城市 */
  // const [curCityObj, setCurCityObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  /**当前城市 */
   useEffect(()=>{
    setIsLoading(true);
    // 优化
    Promise.all([getCityList({level:1}),getHotCity(),getCurrentCity()]).then(values=>{
      console.log('Promiseall',values);
      const listObj = handleData(values[0].body);
      const keys = Object.keys(listObj).sort();
      listObj['hot'] = values[1].body;
      const curCity =[ values[2]];
      listObj['#'] = curCity;
      keys.unshift('hot'); 
      keys.unshift('#'); 
      setCityListObj(listObj);
      setCityKey(keys);
      // setCurCityObj(curCity);
      setIsLoading(false)
      console.log('useEffect*************');
      cityRef.current.measureAllRows();
    });
  },[]);
  // measureAllRows
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

  /**
   * List组件渲染每一行的方法
   * @param {*} param0 
   * isScrolling： 当前项是否正在滚动中
   * isVisible:当前项在 List 中是可见的
   * style :注意：重点属性，一定要给每一个行数据添加该样式！作用：指定每一行的位置
   * @returns 
   */
  const rowRenderer = ({ key, index, isScrolling,isVisible,style}) => {
    // 获取每一行的字母索引
    const letter = cityKey[index];
    return (
      <div key={key} style={style} className="citycontent">
        <div className="title">{formatCityIndex(letter)}</div>
        { cityListObj[letter] && cityListObj[letter].map(item => (
          <div className="name" key={item.value} onClick ={()=>changeCurrentCoty(item)}>
            {item.label}
          </div>
        ))}
      </div>
      )
  }
    // 创建动态计算每一行高度的方法
  const getRowHeight = ({ index }) => {
    // 索引标题高度 + 城市数量 * 城市名称的高度
    // TITLE_HEIGHT + cityListObj[cityKey[index]].length * NAME_HEIGHT
    return TITLE_HEIGHT + cityListObj[cityKey[index]].length * NAME_HEIGHT;
  }
  /**右侧列表渲染 */
  const renderCityIndex = ()=>{
    return cityKey.map((item,index) => (
      <li className="city-index-item" key={item} onClick={()=>{
        cityRef.current.scrollToRow(index);
      }}>
        <span className={activeIndex === index ? 'index-active' : ''}>
          {item === 'hot' ? '热' : item.toUpperCase()}
        </span>
      </li>
    ))
  };
  /**滚动时更新右侧的列表的当前列 */
  const onRowsRendered = ({startIndex})=>{
    if(activeIndex !== startIndex){
      setActiveIndex(startIndex);
    }
  };
  /**修改当前城市 */
  const changeCurrentCoty = ({label,value})=>{
    if (HOUSE_CITY.indexOf(label) > -1) {
      // 有
      localStorage.setItem('hkzf_city', JSON.stringify({ label, value }))
      goBackPage();
    } else {
      Toast.show({content: '该城市暂无房源数据!'})
    }
  };
  return (<div className='citylist'> 
    <NavBar  backArrow={<i className="iconfont icon-back" />} onBack={goBackPage}>城市列表</NavBar>
    {/* 城市列表 */}
    {isLoading ? ( <div>Loading ...</div>):(
        <AutoSizer>
          {({ width, height }) => (
            <List ref={cityRef} width={width} height={height} 
                  rowCount={cityKey.length} rowHeight={getRowHeight} 
                  rowRenderer={rowRenderer} onRowsRendered={onRowsRendered}
                  scrollToAlignment={'start'}/>
          )}
        </AutoSizer>
    )}
    <ul className="city-index">{renderCityIndex()}</ul>
  </div>)
}

export default CityList;