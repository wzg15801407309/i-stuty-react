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
function APPButton(){
  function  handleClick (){
    console.log('单击事件触发');
  }
  return (
    <button onClick={handleClick}>button</button>
  )
}
export default APPButton;