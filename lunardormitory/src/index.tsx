import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import HomeLogin from './pages/HomeLogin';
import Login from './pages/Login';
import RegisDor from './pages/RegisDor';
import Regis from './pages/Register';
import Infochange from './components/Infochange';
import Info1 from './components/Info1';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "HomeLogin",
    element: <HomeLogin/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "Register",
    element: <Regis/>
  },
  {
    path: "RegisDor",
    element: <RegisDor/>
  },
  {
    path: "InfoChange",
    element: <Infochange/>
  },
  {
    path: "Info1",
    element: <Info1/>
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App></App> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
