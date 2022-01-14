
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
    /**
     * 优化的要点
     * 1、添加name属性，且name的值和state的值相同
     * 2、根据type来确定获取的值
     */
    handleChange = (e)=>{
      const target = e.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value
      })
    }

    render(){
      return (
        <div>
          {/* 文本框的实现 */}
          <input name='text' type = 'text' value={ this.state.text }onChange = {this.handleChange}></input>
          <br/>
          {/*  富文本 */}
          <textarea name='content' value={ this.state.content} onChange={this.handleChange}></textarea>
          <br/>
          {/* 下拉框 */}
          <select name='city' value={this.state.city} onChange={this.handleChange}>
            <option value='bj'>北京</option>
            <option value='sh'>上海</option>
            <option value='cd'>成都</option>
            <option value='sz'>深圳</option>
          </select>
          <br/>
          {/* 复选框 */}
          <input name='isChecked' type='checkbox' checked={this.state.isChecked} onChange={this.handleChange}></input>
        </div>
      )
    }
}
ReactDOM.render(<APP/>,document.getElementById('root'));