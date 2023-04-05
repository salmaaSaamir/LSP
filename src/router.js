import React from "react";
import ReactDOM from "react-dom/client";
// import Footer from '../src/components/shared/Footer'
import {createBrowserRouter} from "react-router-dom";
import "./index.css";
import Headre from './components/shared/Header';
import UserHeader from './components/shared/UserHeader';
import UserRequests from '../src/components/userRequests/UserRequests'
import BorrowRequest from './components/borrowRequests/BorrowRequest';
import Header from './components/HomeUser/Header';
import Body from './components/HomeUser/Body';
import Footer from './components/HomeUser/Footer';
export const router = createBrowserRouter([
{
    path: "/",
    element: <>
    <Headre /> 
    <BorrowRequest/>
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
    <UserHeader/>
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

