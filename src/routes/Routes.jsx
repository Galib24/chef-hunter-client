import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import MoreInfo from '../pages/Home/More Info/MoreInfo';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/REgistration/Registration';
import Terms from '../pages/Shared/Terms condition/Terms';
import Conditions from '../pages/Shared/Conditions/Conditions';


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
        loader: ({params}) => fetch(`http://localhost:5000/chefDetails/ `)

    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Registration></Registration>,

    },


    {
        path: '/terms',
        element: <Terms></Terms>
    }



]);

export default router;