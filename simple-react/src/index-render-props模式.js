

/**
 * 高阶使用
 * 1、render props
 * 2、高阶组件
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import propsTypes from 'prop-types'
// 导入图片
import img from './img/cat.png'
// 创建Mouse组件
class MouseRender extends React.Component{
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
    return this.props.render(this.state);
  }
}
// props的校验
MouseRender.propsTypes = {
  render:propsTypes.func.isRequired
}
class MouseChildren extends React.Component{
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
    return this.props.children(this.state);
  }
}
// props的校验
MouseChildren.propsTypes = {
  children:propsTypes.func.isRequired
}
class APP extends React.Component{
  render(){
    return (
      <div>
        <h1>render props</h1>
        <MouseRender  render = {mouse=>{
            return(<p> 鼠标位置:{mouse.x},{mouse.y}</p>)
        }}/>
        <MouseChildren>
          {mouse=>{
              return(<p> 鼠标位置:{mouse.x},{mouse.y}</p>)
          }}
        </MouseChildren> 
        
        <MouseRender render = { mouse => {
          return <img alt='猫' src={img} style={{
            position:"absolute",
            top: mouse.y-32,
            left: mouse.x-32
          }} />
        }}></MouseRender>
        </div>
    )
  }
}
ReactDOM.render(<APP/>, document.getElementById('root'));