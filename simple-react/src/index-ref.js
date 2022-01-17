/**
 * 非受控组件 直接操作dom不推荐
 * 通过创建ref对象来实现
 * ref对象的创建必须要在constructor中
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';

class APP extends React.Component{
    constructor(){
      super();
      this.txtRef =  React.createRef();
    }
    getTxt = (e)=>{
     console.log('文本框：',this.txtRef.current.value);
    }

    render(){
      return (
        <div>
          {/* 文本框的实现 */}
          <input  type = 'text' ref={this.txtRef}></input>
          <button onClick={this.getTxt}>获取文本框的值</button>
        </div>
      )
    }
}
ReactDOM.render(<APP/>,document.getElementById('root'));