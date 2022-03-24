import { getAreaInfo } from '../../https/homehttp.js';
export const getCurrentCity = ()=>{
  const localCity = JSON.parse(localStorage.getItem('hkzf_city'));
  if(!localCity){
    // 获取到当前的定位信息
    var myCity = new window.BMapGL.LocalCity();
    myCity.get(res=>{
      getAreaInfo({name:res.name}).then(result=>{
        console.log(result);
        localStorage.setItem('hkzf_city',JSON.stringify(result.body));
      });
    });
  }
}