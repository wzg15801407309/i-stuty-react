import React, {useEffect,useState}from 'react';
import { Swiper, Image,Grid,List} from 'antd-mobile';
import { Link } from "react-router-dom";
import './index.less';
import { getSwiperList,getHouseList,getNewsList } from '../../https/homehttp.js';

// 导入导航菜单图片
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'
// 导航菜单数据
const navs = [
  { id: 1, img: Nav1, title: '整租', path: '/list'},
  { id: 2, img: Nav2, title: '合租', path: '/list'},
  { id: 3, img: Nav3, title: '地图找房', path: '/map'},
  { id: 4, img: Nav4, title: '去出租', path: '/rent'}
]
const navsItem = navs.map((item)=>(
  <Link to={item.path} key={item.id} style={{ textDecoration: 'none' }}>
    <Grid.Item>
      <div className='nav-item-block '>
        <Image src={item.img} width={48} height={48} />
        <h2>{item.title}</h2>
      </div>
    </Grid.Item>
  </Link>
))

const Index= ()=>{
  const [swiperList, setSwiperList] = useState([]);
  const [groupList, setGroupList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  useEffect(()=>{
    getSwiperList().then(res=>{
      setSwiperList(res.body);
    });
    getHouseList().then(res=>{
      setGroupList(res.body);
    });
    getNewsList().then(res=>{
      setNewsList(res.body);
    });
  },[]);
  return (
    <div className="home">
      {/* 轮播图 */}
      <Swiper autoplay={true} loop={true}>{
        swiperList.map((item)=>(
          <Swiper.Item key={item.id}>
           <Image height={212} src={`http://localhost:8080${item.imgSrc}`} fit='fill' />
          </Swiper.Item>
        ))
      }
      </Swiper>
      {/* 导航菜单 */}
      <Grid columns={4} className='nav'>{navsItem}</Grid>
      {/* 租房小组 */}
      <div className='groups'>
          <h3 className="groups-caption">
            租房小组 <span className="more">更多</span>
          </h3>
          <Grid columns={2} gap={10} className='groups-item'>{
            groupList.map(item=>(
              <div className='item' key={item.id}>
                <div className='item-left'>
                  <span>{item.title}</span>
                  <span className='left-desc'>{item.desc}</span>
                </div>
                <div className='item-right'>
                  <Image  height={43} width={43} src={`http://localhost:8080${item.imgSrc}`} fit='fill' />
                </div>
              </div>
            ))
          }</Grid>
      </div>
      {/* 最新资讯 */}
      <div className='news'>
        <h3 className="news-caption">
          最新资讯
        </h3>
        <List>{
          newsList.map(item =>(
            <List.Item key={item.id}>
               <div className='news-left'>
                <Image  height={90} width={110} src={`http://localhost:8080${item.imgSrc}`} fit={'fill'} /> 
               </div>
               <div className='news-right'>
                 <div className='right-up'>{item.title}</div>
                 <div className='right-down'>
                   <span>{item.from}</span>
                   <span>{item.date}</span>
                 </div>
               </div>
            </List.Item>
          ))
        }</List>
      </div>
    </div>
  )
}
export default Index;