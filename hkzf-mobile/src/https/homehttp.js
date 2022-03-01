import http from '../axios';

/** 首页  轮播图 */
const getSwiperList = () => {
  return new Promise((resolve,reject) => {
    http('get','/home/swiper').then(res => {
      resolve(res);
    },error =>{console.log('网络错误～',error);reject(error);});
  })
};
export {
  getSwiperList
}