

/**
 * 5 虚拟Dom和Diff算法
 * 5.1 react(渲染)执行过程
 *   ～初次渲染的时候，React会根据state(Model),创建一个虚拟DOM
 *   ～根据虚拟DOM生成真正DOM, 渲染到页面中
 *   ～当数据发生变化时(setState)，重新根据新的数据，创建新的虚拟DOM对象(数)
 *   ～与上一次得到虚拟DOM对象，使用Diff算法🆚找不同，得到需要更新的内容
 *   ～最终react只变化的内容更新（patch)和DOM中，重新渲染页面
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