import React from 'react';
import { Button, Space, Swiper, Toast } from 'antd-mobile';
import './index.css'

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className='content'
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))
const Index= ()=>{
  return (
    <div className="home">
       <Swiper autoplay={true} loop={true}>{items}</Swiper>
    </div>
  )
}
export default Index;