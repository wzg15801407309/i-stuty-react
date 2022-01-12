/**
 * React 事件处理
 * 1、类
 */
import React from 'react'
// class APPButton extends React.Component{
//   handleClick(){
//     console.log('单击事件触发');
//   }
//   render(){
//     return (
//       <button onClick={this.handleClick}>button</button>
//     )
//   }
// }

// export default APPButton;

// 事件函数
// function APPButton(){
//   function  handleClick (){
//     console.log('单击事件触发');
//   }
//   return (
//     <button onClick={handleClick}>button</button>
//   )
// }
// export default APPButton;

// 事件对象
function APPButton() {
  function  handleClick (e){
    // 阻止默认的事件跳转
    e.preventDefault();
    console.log('事件对象',e);
  }
  return(
    <a href='https://www.baidu.com/' onClick={handleClick}>a事件点击</a>
  )
}
export default APPButton;