// // 导入react
// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// // 导入react
// import React from 'react';
// import ReactDOM from 'react-dom';

// const title = <h1>hello JSX</h1>

// ReactDOM.render(title,document.getElementById("root"));



// 导入react
import React from 'react';
import ReactDOM from 'react-dom';

/*
 * 函数组件
* 函数名必须大写
*/ 
// function Hello (){
//   return(
//     <div>hello 函数组件</div>
//   )
// }
// ReactDOM.render(<Hello />,document.getElementById("root"));
/**
 * 类组件
 */
// class Hello extends React.Component{
//   render(){
//     return(
//       <div>我的第一个react类组件</div>
//     )
//   }
// }
// ReactDOM.render(<Hello />,document.getElementById("root"));
/**
 * 组件抽离为独立的文件
 */

// import Hello from './newcomponent.js';
// ReactDOM.render(<Hello />,document.getElementById("root"));
// 事件绑定
import APPButton from './enevt.js';
ReactDOM.render(<APPButton />,document.getElementById("root"));