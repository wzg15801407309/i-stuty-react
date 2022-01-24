

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
 * 4 组件性能优化
 * 4.1 减轻 state
 * ～ state：中只存储跟组件渲染的数据 注意：不做渲染的数据不要放在state中
 * ～ 对于需要在多个方法中使用的数据 应该放在this中。比如：定时器的id 最好的方式是保存在this中
 * 4.2 减少不必要的渲染
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App2.css';
class APP extends React.Component{
  state={
    count:0
  }
  countAdd = ()=>{
      this.setState(()=>{
        return {
          count:this.state.count+1
        }
      })
  }
  render(){
    return(
      <div>
        <h1>计数器:{this.state.count}</h1>
        <button onClick={this.countAdd}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<APP/>, document.getElementById('root'));