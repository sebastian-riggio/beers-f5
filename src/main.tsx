import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter,  Outlet,  RouterProvider,} from "react-router-dom";
import { routerConfig } from './router/routerConfig';

export const router = createBrowserRouter (routerConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)