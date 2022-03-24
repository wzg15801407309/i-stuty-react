import http from '../axios';

/** 城市 列表   */
const getCityList = params => {
  return new Promise((resolve,reject) => {
    http('get','/area/city',params).then(res => {
      resolve(res);
    },error =>{console.log('网络错误～',error);reject(error);});
  })
};
/**热门 城市 */
const getHotCity = ()=>{
  return new Promise((resolve,reject) => {
    http('get','area/hot').then(res => {
      resolve(res);
    },error =>{console.log('网络错误～',error);reject(error);});
  })
}
export {
  getCityList,
  getHotCity
}