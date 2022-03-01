import React, {useEffect,useState}from 'react';
import { Swiper, Image } from 'antd-mobile';
import './index.css'

import { getSwiperList } from '../../https/homehttp.js'
const Index= ()=>{
  const [swiperList, setSwiperList] = useState([]);
  useEffect(()=>{
    getSwiperList().then(res=>{
      setSwiperList(res.body);
    });
  },[]);
  return (
    <div className="home">
      <Swiper autoplay={true} loop={true}>
        {
          swiperList.map((item)=>(
            <Swiper.Item key={item.id}>
             <Image src={`http://localhost:8080${item.imgSrc}`} fit='fill' />
            </Swiper.Item>
          ))
        }
      </Swiper>
    </div>
  )
}
export default Index;