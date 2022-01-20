

/**
 * 生命周期 
 * 只有class的组件才有生命周期，下面是学习的生命周期
 *      创建时                更新时              卸载时
 * 
 *    construct      
 * 
 *    =======render(贯穿创建和更新)======
 * 
 *    =======React更新DOM和refs=========
 * 
 *    componenDidMount     componenidUpdate     componentWillUnmount
 *  执行顺序：construct() ==> render() ==> componenDidMount()
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class APP extends React.Component{
  /**
   * 生命周期1
   * 创建组件时最先执行: 初始化state 为事件处理程序绑定this
   */
  // 
  constructor(props){
    super(props);
    console.warn('生命周期钩子函数:constructor');
  }
  /**
   * 生命周期2
   * 每次组件渲染都还触发，作用时渲染UI（注意：不能在render函数里不能调用setState()）
   * 在以下情况下会调用render： newProps  setState   forceUpdata() 强制刷新
   */
  render(){
    console.warn('生命周期钩子函数:render');
    return (
      <div className='pink'>
        <h1>生命周期函数测试:</h1>
        <Child />
      </div>
    )
  }
  /**
   * 生命周期3
   * 组件挂载（完成Dom渲染）后，作用：发起网络请求和Dom操作
   */
  componentDidMount(){
    console.warn('生命周期钩子函数:componentDidMount');
  }
}
class Child extends React.Component{
  render(){
    console.warn('Child生命周期钩子函数:render');
    return (
      <div className='pink'>
        <h1>生命周期函数测试:</h1>
      </div>
    )
  };
  /**
   * 发起网络请求和Dom操作 
   * 注意：如果要调用seState()更新状态  要放在if条件中
   */
  componentDidUpdate(){
    console.warn('Child生命周期钩子函数:componentDidUpdate');
  };
  // 卸载页面-关闭页面调用   关闭定时器
  componentWillUnmount(){
    console.warn('Child生命周期钩子函数:componentWillUnmount');
  }
}
ReactDOM.render(<APP> </APP>, document.getElementById('root'));