import React from 'react';
import './App.css';
// import Nav from './components/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Regis from './pages/Register';
import HomeLogin from './pages/HomeLogin';
import { Route, Routes } from "react-router-dom"
import RegisDor from './pages/RegisDor';
import Info1 from './components/Info1';
import Infochange from './components/Infochange';
import NotiPayment from './components/์NotiPayment';

function App() {
  return (
    <div className="App font-sans">
      {/* <RegisDor></RegisDor> */}
      {/* <HomeLogin></HomeLogin> */}
      {/* <Info1></Info1> */}
      {/* <NotiPayment></NotiPayment> */}
      {/* <Infochange></Infochange> */}
      <Login></Login>
      {/* <HomeLogin></HomeLogin> */}
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
