
// 导入react
import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component{
  state ={
      text:"",
      content:"",
      city:"bj",
      isChecked:false
    }
    handleClick = (e)=>{
      this.setState({
        text : e.target.value
      })
    }
    handleChange = (e)=>{
      this.setState({
        content: e.target.value
      })
    }
    handleSelect = (e)=>{
      this.setState({
        city: e.target.value
      })
    }
    handleChecked = e =>{
      this.setState({
        isChecked: e.target.checked
      })
    }
    render(){
      return (
        <div>
          文本框的实现
          <input type = 'text' value={ this.state.text }onChange = {this.handleClick}></input>
          <br/>
          {/*  富文本 */}
          <textarea value={ this.state.content} onChange={this.handleChange}></textarea>
          <br/>
          {/* 下拉框 */}
          <select value={this.state.city} onChange={this.handleSelect}>
            <option value='bj'>北京</option>
            <option value='sh'>上海</option>
            <option value='cd'>成都</option>
            <option value='sz'>深圳</option>
          </select>
          <br/>
          {/* 复选框 */}
          <input type='checkbox' checked={this.state.isChecked} onChange={this.handleChecked}></input>
        </div>
      )
    }
}
ReactDOM.render(<APP/>,document.getElementById('root'));