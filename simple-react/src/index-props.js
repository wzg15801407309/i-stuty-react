

/**
 * props
 * 1、函数组件，传递参数
 * 2、类组件，通过this.props.数据
 * 3、props的特点：任何类型的数据，包括函数也是可以传递的，heml
 * 4、props 只能读不能修改
 * 5、在类组件中如果需要在构造函数中读取props需要在super(props)中传递
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
//函数组件传递数据
// function APP(props) {
//props是对象
//   return(
//     <span>我的名字是{props.name},我的年纪是{props.age}</span>
//   )
  
// }

class APP extends React.Component{
    render(){
      return (
        <div>我的名字是{this.props.name},我的年纪是{this.props.age}</div>
      )
    }
}
ReactDOM.render(<APP name='wzg' age='28'/>,document.getElementById('root'));