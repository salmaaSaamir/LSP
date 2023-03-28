import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter} from "react-router-dom";
import "./index.css";
import Headre from './components/shared/Header';
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
    path: "/home",
    element: <div>Hello home!</div>,
},
{
    path: "/userReq",
    element: <div>Hello userReq!</div>,
},
]);

