

/**
 * React - Router v6
 * (1) Router 基础
 *  1.1 安装  npm install react-router-dom
 *  1.2 导入 import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
 * 
*/  
// 导入React
import React from 'react';
import ReactDOM from 'react-dom';

// 2 导入router
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom';
const NoPage = () => <h1>404</h1>;
// 3 使用Router组件包裹整个应用
const App = ()=>{
  return(
    <Router>
      <div>
        <h1>React基础</h1>
            {/* 4 指定路由入口 */}
            <Link to="/noPage">页面一</Link>
        <div>
        
            {/* 5 指定路由出口 */}
            <Routes>
              <Route path="/noPage"  element={<NoPage />} />
            </Routes>
        </div>
     
      </div>
  </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'));