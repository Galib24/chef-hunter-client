import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import MoreInfo from '../pages/Home/More Info/MoreInfo';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/REgistration/Registration';
import Terms from '../pages/Shared/Terms condition/Terms';
import Conditions from '../pages/Shared/Conditions/Conditions';
import ErrorPage from '../pages/Shared/Error/ErrorPage';
import Blog from '../pages/Shared/Blog/Blog';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        errorElement: <ErrorPage></ErrorPage>,
        loader: ({params}) => fetch(`http://localhost:5000/chefDetails/ `)

    },
    {
        path: '/login',
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: '/register',
        element: <Registration></Registration>,
        errorElement: <ErrorPage></ErrorPage>,

    },


    {
        path: '/terms',
        element: <Terms></Terms>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: '/blog',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Blog></Blog>
        
    }



]);

export default router;