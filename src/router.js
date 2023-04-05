import React from "react";
import ReactDOM from "react-dom/client";

import {createBrowserRouter} from "react-router-dom";
import "./index.css";
import Headre from './components/shared/Header';
import UserHeadre from './components/shared/UserHeader';
import UserRequests from '../src/components/userRequests/UserRequests'
import BorrowRequest from './components/borrowRequests/BorrowRequest';
import Header from './components/HomeUser/Header';
import Body from './components/HomeUser/Body';
import Footer from '../src/components/HomeUser/Footer';
import Home from '../src/components/HomeAdmin/Home';
import Create from '../src/components/HomeAdmin/Create';
import Update from '../src/components/HomeAdmin/Update'
export const router = createBrowserRouter([
    {
    path: "/",
    element: <Home/>,
    },
    {
        path: "/Update",
        element: <Update/>,
    },
    {
        path: "/Create",
        element:<> <Create/>
        </>,
    },

{
    path: "/borrowReq",
    element: <>
    <Headre /> 
    <BorrowRequest/>
    </>,
},
{

    path: "/home",
    element: <div>Hello home!</div>,
},
{

    path: "/userReq",
    element:
    <>
    <UserHeadre/>
    <UserRequests />
    </>,
},
{
    path: "/logout",
    element: <Footer />
    ,
},

{
    path: "/1",
    element: <>
    <Header /> 
    <Body/>
    <Footer/>
    </>,
},
{
    path: "/My-Books",
    element: <>
    <div>Hello My Books</div>
    </>,
},
{
    path: "/Show-Details",
    element: <>
    <div>Hello in Details</div>
    </>,
}
]);

