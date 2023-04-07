import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import {router} from './router'
import {RouterProvider,} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<>
<RouterProvider router={router} />
</>
);
