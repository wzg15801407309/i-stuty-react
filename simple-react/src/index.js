

/**
 * 生命周期
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class APP extends React.Component{
    render(){
      return (
        <div className='pink'>
          <h1>组件标签的子节点:</h1>
        </div>
      )
    }
}
ReactDOM.render(<APP> </APP>, document.getElementById('root'));