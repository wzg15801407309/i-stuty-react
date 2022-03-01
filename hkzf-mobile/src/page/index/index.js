import React, {useEffect,useState}from 'react';
import { Swiper, Image,Grid } from 'antd-mobile';
import { Link } from "react-router-dom";
import './index.css';
import { getSwiperList } from '../../https/homehttp.js';

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
  useEffect(()=>{
    getSwiperList().then(res=>{
      setSwiperList(res.body);
    });
  },[]);
  return (
    <div className="home">
      {/* 轮播图 */}
      <Swiper autoplay={true} loop={true}>
        {
          swiperList.map((item)=>(
            <Swiper.Item key={item.id}>
             <Image height={212} src={`http://localhost:8080${item.imgSrc}`} fit='fill' />
            </Swiper.Item>
          ))
        }
      </Swiper>
      {/* 导航菜单 */}
      <Grid columns={4} className='nav'>{navsItem}</Grid>
    </div>
  )
}
export default Index;