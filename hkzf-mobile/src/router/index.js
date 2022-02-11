import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from '../page/home';
import CityList from '../page/cityList';
import News from '../page/news';


const BasicRoute = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />}>
                <Route  path="news"  element={<News />}/>
            </Route>
            <Route path="/cityList"  element={<CityList />}/>
        </Routes>
    </Router>
);

export default BasicRoute;