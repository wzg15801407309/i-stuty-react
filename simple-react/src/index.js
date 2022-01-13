
// 导入react
import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component{
  state ={
      text:""
    }
    handleClick = (e)=>{
      this.setState({
        text : e.target.value
      })
    }
    render(){
      return (
        // 文本框的实现
        <div><input type = 'text' value={ this.state.text }onChange = {this.handleClick}></input></div>
        // 富文本
      )
    }
}
ReactDOM.render(<APP/>,document.getElementById('root'));