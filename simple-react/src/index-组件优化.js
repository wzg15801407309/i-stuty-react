

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
 * 知道：在react的更新机制中父组件的更新会带动子组件的重新渲染，如何避免这个问题
 * 解决办法：钩子函数 shouldComponentUpdate(nextProps,nextState) 更新阶段的函数  在render前调用
 * 4.3 纯组件
 *  注意：当state或者是props中的值为引用类型时，应该创建新数据，在赋值。不然不会重新渲染
 *  因为在纯组件的内部的对比是：shallow compare 浅层对比
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App2.css';
class APP extends React.Component{
  state={
    count:0,
    number:0,
    // list:[]
  }
  countAdd = ()=>{
      this.setState(()=>{
        return {
          count:this.state.count+1,
          // list:[...list,{新的值}]
        }
      })
  }
  handleClick = () =>{
    this.setState(()=>{
      return {
        number: Math.floor(Math.random()*3)
      }
    })
  }
  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log('shouldComponentUpdate');
  //   // return false 组件组件重新渲染
  //   console.log('nextState',nextState);
  //   console.log('this.state',this.state);
  //   return true 
  // }
  shouldComponentUpdate(nextProps,nextState) {
    console.log('最新状态:',nextState,"当前状态:",this.state.number);
    // if(nextState.number === this.state.number){
    //   return false
    // }
    // return true 
    // 优化
    return nextState.number !== this.state.number
  }
  render(){
    console.log('组件更新');
    return(
      <div>
        <h1>计数器:{this.state.count}</h1>
        <button onClick={this.countAdd}>+</button>
        <h1>随机数:{this.state.number}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<APP/>, document.getElementById('root'));