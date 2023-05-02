import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import MoreInfo from '../pages/Home/More Info/MoreInfo';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                
            }
        ]
    },
    {
        path: 'moreDetails/:id',
        element: <MoreInfo></MoreInfo>,

    },
    {
path: '/login',
element: <Login></Login>
    }
]);

export default router;