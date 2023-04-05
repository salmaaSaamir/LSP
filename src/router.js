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
import Signin from './components/Signin/Signin';
import Signup from './components/Register/Signup';
import Mybooks from './components/Mybooks/Mybooks';
export const router = createBrowserRouter([
    {
    path: "/",
    element: <Signin/>,
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

    path: "/userhome",
    element: <>
    <Header/>
    <Body/>
    <Footer/>
    </>,
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
    path: "/Signup",
    element: <Signup />
    ,
},
{
    path: "/adminhome",
    element: <>
    <Home /> 
    <Footer/>
    </>,
},
{
    path: "/My-Books",
    element: 
   <Mybooks/>

},
{
    path: "/Show-Details",
    element: <>
    <div>Hello in Details</div>
    </>,
}
]);

