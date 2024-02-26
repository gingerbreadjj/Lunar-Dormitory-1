import React from 'react';
import './App.css';
// import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Regis from './components/Regis';
import HomeLogin from './components/HomeLogin';
import { Route, Routes } from "react-router-dom"
import RegisDor from './components/RegisDor';
import Info1 from './components/Info1';
import Infochange from './components/Infochange';
import NotiPayment from './components/bampage';

function App() {
  return (
    <div className="App">
      {/* <RegisDor></RegisDor> */}
      {/* <HomeLogin></HomeLogin> */}
      {/* <Info1></Info1> */}
      {/* <NotiPayment></NotiPayment> */}
      <Infochange></Infochange>
    </div>
  );
}

export default App;
