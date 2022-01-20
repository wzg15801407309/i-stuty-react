

/**
 * 高阶使用
 * 1、render props
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
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
}
class APP extends React.Component{
  render(){
    return (
      <div>
        <h1>render props 模式</h1>
        <Child />
      </div>
    )
  }
}
class Child extends React.Component{
  render(){
    return (
      <div>
        <h1>:</h1>
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