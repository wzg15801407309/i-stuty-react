import http from '../axios';

/** 首页  轮播图 */
const getSwiperList = () => {
  return new Promise((resolve,reject) => {
    http('get','/home/swiper').then(res => {
      resolve(res);
    },error =>{console.log('网络错误～',error);reject(error);});
  })
};
/**首页 租房小组 */
const getHouseList = (params)=>{
  return new Promise((resolve,reject)=>{
    http('get','/home/groups',{area:'AREA%7C88cff55c-aaa4-e2e0'}).then(res =>{
      resolve(res);
    },error=>{console.log('网络错误～',error);reject(error);});
  });
};
/**最新资讯 */
const getNewsList = (params)=>{
  return new Promise((resolve,reject)=>{
    http('get','/home/news',{area:'AREA%7C88cff55c-aaa4-e2e0'}).then(res =>{
      resolve(res);
    },error=>{console.log('网络错误～',error);reject(error);});
  });
};
export {
  getSwiperList,
  getHouseList,
  getNewsList
}