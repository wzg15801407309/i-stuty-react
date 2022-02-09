import React from 'react';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom'
import Home from '../page/home';
import CityList from '../page/cityList';


const BasicRoute = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/cityList"  element={<CityList />}/>
        </Routes>
    </Router>
);

export default BasicRoute;