

/**
 * 组件之间的传值
 * 1、父传子  
 * 2、子传父
 * 3、兄弟之间
 * 4、嵌套传值
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/**
 * 父传子
 */
//父组件
class APPF extends React.Component{
  state = {
    value:"我是父组件的值"
  }
    render(){
      return (
        <div className='myfather'>
          <div>我是父组件</div>
          <APPC value={this.state.value} />
        </div>
      )
    }
}
//子组件
function APPC(props) {
  return(
    <div className='mychild'>
      <div>子组件接收到父组件的value：{props.value}</div>
    </div>
  )
  
}

ReactDOM.render(<APPF/>,document.getElementById('root'));
/**
 * 子传父
 */
 class APPF1 extends React.Component{
  state = {
    msgvalue:""
  }
  getMsg = data =>{
    this.setState({
      msgvalue:data
    })
  }
  render(){
    return (
        <div className='myfather'>
          <div>父组件接受的值:{this.state.msgvalue}</div>
          <APPC1 getMsg={this.getMsg} />
        </div>
      )
    }
}
//子组件
class APPC1 extends React.Component {
  state = {
    msg:"子组件值"
  }
  handlClick = ()=>{
    this.props.getMsg(this.state.msg);
  }
  render(){
    return (
      <div className='mychild'>
        <div>子组件</div>
        <button onClick={this.handlClick}>点我</button>
      </div>
    )
  }
  
}

ReactDOM.render(<APPF1/>,document.getElementById('root1'));
//兄弟组件的值的传递，是建立一个公共的父组件+props来共享(状态提升)
class Counter extends React.Component {
  state = {
    count:0
  }
  onIncrement = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return (
      <div className='mychild'>
       <Children1  count={this.state.count}/>
       <Children2  onIncrement={this.onIncrement}/>
      </div>
    )
  }
}
class Children1 extends React.Component {
  render(){
    return (
      <div>计数器:{this.props.count}</div>
    )
  }
}
class Children2 extends React.Component {
  handlClick = ()=>{
    this.props.onIncrement();
  }
  render(){
    return (
      <div>
        <button onClick={this.handlClick} >+1</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter/>,document.getElementById('root2'));
// 多嵌套组件件数据的传值（跨组件）Context
// 创建context得到下面的组件
const { Provider, Consumer } = React.createContext();

class APP extends React.Component {
  render(){
    return (
      <Provider value='pink'>
        <div className='pink'>
          <Children3/>
        </div>
      </Provider>
 
    )
  }
}
class Children3 extends React.Component {
  render(){
    return (
      <Children4 />
    )
  }
}
class Children4 extends React.Component {
  render(){
    return (
      <div>
       <Consumer>
         {data =><span>我是子节点--{data}</span>}
       </Consumer>
      </div>
    )
  }
}

ReactDOM.render(<APP/>,document.getElementById('root3'));