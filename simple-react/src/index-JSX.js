

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
 * 
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component{
  state = {
    count:0
  }
  handleClick = ()=>{
    this.setState(
      (state,props)=>{
        return {
          count:this.state.count+1
        }
      },
      ()=>{
        console.log('setState的第二个参数:',this.state.count);
      });
      console.log('setState是异步的',this.state.count);
  }
  render(){
    return (
      <div>
        <h1>setState的深入</h1>
        <h1>计数器:{this.state.count}</h1>
        <button  onClick={this.handleClick} >+1</button>
      </div>
    )
  }
}
ReactDOM.render(<APP/>, document.getElementById('root'));