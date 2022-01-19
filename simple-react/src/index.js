

/**
 * props深入
 * 1、props.children
 * 2、props 校验(增加健壮性)
 *  a.安装包 prop-types
 *  b.常见类型：array、func、bool、number、object、string 
 *    props.shape 可以用来{aewa:"12",k:111}
 *  c.参考地址：https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html（高级指引）
 * 3、props的默认值 场景 分页 dfaultProps（为传props起效）
*/ 
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


//  2、props校验 
import PropTypes from 'prop-types'
/**
 * 父传子
 */
const Test =() =><button>我是button组件</button>
class APP extends React.Component{
    render(){
      return (
        <div className='pink'>
          <h1>组件标签的子节点:</h1>
          {this.props.children}
          <span>测试prop的校验:{this.props.age}</span>
        </div>
      )
    }
}
APP.propTypes ={
  age:PropTypes.number
}
ReactDOM.render(
  <APP age={19}>
    我是测试子节点的
    <p>我是一个标签</p>
    <Test />
  </APP>,
  document.getElementById('root'));
