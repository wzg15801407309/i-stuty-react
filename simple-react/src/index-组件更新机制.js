

/**
 * React 原理解析
 * 1 setState
 * 1.1 setState 是异步的 
 *    注意：使用该语法，后面的setState不会依赖于前面的setState
 *        可以调用多次，但是render只触发一次
 * 1.2 推荐语法： this.setState((state,prop)=>{}) 推荐返回一个函数 这是的state 的最新的值
 * 1.3 setState第二个参数
 *    场景：如果希望在状态更新（也就是页面重新渲染）后立即执行某个操作，就使用setState的第二个参数
 *    语法：setState(update[,callback])
 * 2 JSX 
 * ～ JSX仅仅是createElent()方法的语法糖（简化语法）
 * ～ JSX在脚手架中的@babel/presrt-react插件编译为createElement()
 * ～ createElement()会被编译为React元素：是一对象，用来描述你希望渲染的内容
 * 3 组件更新机制
 * 3.1 setState() 的两个作用：1、修改state 2、更新组件（UI）
 *  过程：父组件重新渲染，也会重新渲染子组件，但是只会渲染当前组件子树（当前组件及其所有的子组件）
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App2.css';
class APP extends React.Component{
  state = {
    color:"#369"
  }
  getColor(){
    return Math.floor(Math.random()*256);
  }
  changBG = ()=>{
    this.setState(()=>{
      return {
        color: `rgb(${this.getColor()},${this.getColor()},${this.getColor()})`
      }
    })
  }
  render(){
    console.log('根组件');
    return (
      <div className='grandfather' style={{ backgroundColor: this.state.color}}>
        <button onClick={this.changBG} >根组件 - 更新样式状态及</button>
        <div className='father'>
          <Father1 />
          <Father2 />
        </div>
      </div>
    )
  }
}
class Father1 extends React.Component{
  state = {
    count:0
  }
  handleClick = ()=>{
    this.setState(state=>{return {count:this.state.count+1}})
  }
  render(){
    console.log('左侧父组件');
    return (
      <div className='father-box'>
        <h2>左侧 - Father1  <button  onClick={this.handleClick} >点我:{this.state.count}</button> </h2>
        <div className='children-box'>
          <Children1 />
          <Children2 />
        </div>
      </div>
    )
  }
}
class Father2 extends React.Component{
  state = {
    count:0
  }
  handleClick = ()=>{
    this.setState(state=>{return {count:this.state.count+1}})
  }
  render(){
    console.log('右侧父组件');
    return (
      <div className='father-box'>
        <h2>右侧 - Father2  <button  onClick={this.handleClick} >点我:{this.state.count}</button> </h2>
        <div className='children-box'>
          <Children3 />
          <Children4 />
        </div>
      </div>
    )
  }
}
class Children1 extends React.Component{
  render(){
    console.log("左侧子组件 - 1");
    return (
      <div className='child'>左子组件1-1</div>
    )
  }
}
class Children2 extends React.Component{
  render(){
    console.log("左侧子组件 - 2");
    return (
      <div className='child'>左子组件1-2</div>
    )
  }
}
class Children3 extends React.Component{
  render(){
    console.log("右侧子组件 - 1");
    return (
      <div className='child'>右子组件1-1</div>
    )
  }
}
class Children4 extends React.Component{
  render(){
    console.log("右侧子组件 - 2");
    return (
      <div className='child'>右子组件1-2</div>
    )
  }
}
ReactDOM.render(<APP/>, document.getElementById('root'));