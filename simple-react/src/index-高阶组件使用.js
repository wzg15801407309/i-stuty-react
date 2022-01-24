

/**
 * 高阶使用
 * 1、render props、
 * 2、高阶组件
 *  a、是一个函数，接收要包装的组件，返回增强后的组件
 *  b、高阶组件内部创建一个类组件，在这个类组件中提供复用的状态罗京代码，通过prop将复用的状态传递给被包装组件WrapedComponent
 *  c、使用：1、创建一个以with开头的函数   2、指定函数参数（以大写开头） 3、在函数内部创建一个类组件，提供复用的状态逻辑代码，并返回 
 *          4、在该组件中，渲染参数组件，同时将状态通过prop传递给参数组件
 *  d、注意：在高阶组件中要传递props 不然会丢失
 *
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
// 导入图片
import img from './img/cat.png';

// 高阶组件
// 1
function withMouse(WrapedComponent) {
  // 创建Mouse组件
  class Mouse extends React.Component{
    //鼠标的坐标
    state ={
      x:0,
      y:0
    }
    // 鼠标移动事件
    handleMouseMove = e=>{
      this.setState({
        x:e.clientX,
        y:e.clientY
      })
    }
    // 监听鼠标的移动昂
    componentDidMount(){
      window.addEventListener('mousemove',this.handleMouseMove)
    }
    // 移除时间监听
    componentWillUnmount(){
      window.removeEventListener('mousemove',this.handleMouseMove)
    }
    render(){
      return  <WrapedComponent {...this.state} {...this.props}></WrapedComponent>
    }
  }

  //给每个渲染的组件显示不同名字
  Mouse.displayName =`withMouse${geDisPlayName(WrapedComponent)}`;
  // 设置 组件名称
  function geDisPlayName(WrapedComponent) {
    return WrapedComponent.displayName || WrapedComponent.name || 'Component'
  }
  return Mouse;
}
// 1
const position = props=>{
  return(
    <p>鼠标位置:{props.x},{props.y}</p>
  )
}
const cat = props =>{
  return(<img alt='猫' src={img} style={{
      position:"absolute",
      top: props.y-32,
      left: props.x-32
  }} />)
}
// 3
const PostionMouse = withMouse(position)
const CatMouse = withMouse(cat)
class APP extends React.Component{
  render(){
    return (
      <div>
        <h1>高阶组件实现</h1>
        {/* 4 */}
        <PostionMouse />
        <CatMouse />
      </div>
    )
  }
}
ReactDOM.render(<APP/>, document.getElementById('root'));