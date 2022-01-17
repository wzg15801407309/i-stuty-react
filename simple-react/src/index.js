

/**
 * 组件之间的传值
 * 1、父传子  props
 * 2、子传父
 * 3、兄弟之间
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