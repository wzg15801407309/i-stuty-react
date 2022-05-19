import { getAreaInfo } from '../https/homehttp.js';
export const getCurrentCity = ()=>{
  const localCity = JSON.parse(localStorage.getItem('hkzf_city'));
  if(!localCity){
    return new Promise((resolve,reject)=>{
      // 获取到当前的定位信息
      var myCity = new window.BMapGL.LocalCity();
      myCity.get(res=>{
        try{
          getAreaInfo({name:res.name}).then(result=>{
              localStorage.setItem('hkzf_city',JSON.stringify(result.body));
              resolve(result.body);
            });  
        }catch(e){
          reject(e);
        }
      }); 
    })
  }
  return Promise.resolve(localCity);
}


          