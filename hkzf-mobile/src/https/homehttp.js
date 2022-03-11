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
    http('get','/home/groups',params).then(res =>{
      resolve(res);
    },error=>{console.log('网络错误～',error);reject(error);});
  });
};
/**最新资讯 */
const getNewsList = (params)=>{
  return new Promise((resolve,reject)=>{
    http('get','/home/news',params).then(res =>{
      resolve(res);
    },error=>{console.log('网络错误～',error);reject(error);});
  });
};
/**根据 定位信息 获取房屋信息 */
const getAreaInfo = (params)=>{
  return new Promise((resolve,reject)=>{
    http('get','/area/info',params).then(res=>{
      resolve(res)
    },error=>{console.log('网络错误～',error);reject(error);});
  });
}
export {
  getSwiperList,
  getHouseList,
  getNewsList,
  getAreaInfo
}