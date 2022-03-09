import { lazy } from 'react';

const Mainlayout = lazy(() => import('../page/mainlayout'));
const Index = lazy(() => import('../page/index'));
const HouseList = lazy(() => import('../page/houseList'));
const News = lazy(() => import('../page/news'));
const Profile = lazy(() => import('../page/profile'));
const CityList = lazy(() => import('../page/cityList'))
const Maps = lazy(() => import('../page/map'))

const routerArray = [
    {
        path:'/',
        element:< Mainlayout />,
        children:[
            { index:true,element:< Index /> },
            { path:'list',element:< HouseList /> },
            { path:'news',element:< News /> },
            { path:'profile',element:< Profile /> },
        ]
    },
    {
        path:'citylist',
        element: <CityList />
    },
    {
        path:'map',
        element: <Maps />
    },
]

export default routerArray;
/** old 写法 */
// import { BrowserRouter as Router, Route,Routes,Navigate } from 'react-router-dom'

// import Mainlayout from '../page/mainlayout';

// import CityList from '../page/cityList';
// import News from '../page/news';
// import Index from '../page/index';
// import HouseList from '../page/houseList';
// import Profile from '../page/profile';


// const BasicRoute = () => (
//     <Router>
//         <Routes>
//             {/* 默认路由匹配时，跳转到/home 实现路由重定向到首页 */}
//             <Route path="/" element={<Navigate to="/Mainlayout" />} />
//             <Route path="/Mainlayout" element={<Mainlayout />}>
//                 <Route  path="news"  element={<News />}/>
//                 <Route  path="index"  element={<Index />}/>
//                 <Route  path="houselist"  element={<HouseList />}/>
//                 <Route  path="profile"  element={<Profile />}/>
//             </Route>
//             <Route path="/cityList"  element={<CityList />}/>
//         </Routes>
//     </Router>
// );

// export default BasicRoute;