import React from 'react';
import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom'
import Home from '../page/home';
import CityList from '../page/cityList';
import News from '../page/news';
import Index from '../page/index';
import HouseList from '../page/houseList';
import Profile from '../page/profile';


const BasicRoute = () => (
    <Router>
        <Routes>
            {/* 默认路由匹配时，跳转到/home 实现路由重定向到首页 */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}>
                <Route  path="news"  element={<News />}/>
                <Route exact path="index"  element={<Index />}/>
                <Route  path="houselist"  element={<HouseList />}/>
                <Route  path="profile"  element={<Profile />}/>
            </Route>
            <Route path="/cityList"  element={<CityList />}/>
        </Routes>
    </Router>
);

export default BasicRoute;