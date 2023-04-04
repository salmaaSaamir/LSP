import React from "react";
import ReactDOM from "react-dom/client";
import Footer from '../src/components/shared/Footer'
import {createBrowserRouter} from "react-router-dom";
import "./index.css";
import Headre from './components/shared/Header';
import UserHeader from './components/shared/UserHeader';
import UserRequests from '../src/components/userRequests/UserRequests'
import BorrowRequest from './components/borrowRequests/BorrowRequest';
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
]);

