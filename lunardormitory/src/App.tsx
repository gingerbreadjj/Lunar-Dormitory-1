import React from 'react';
import './App.css';
// import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Regis from './components/Regis';
import HomeLogin from './components/HomeLogin';
import { Route, Routes } from "react-router-dom"
import RegisDor from './components/RegisDor';
import NotiPayment from './components/์NotiPayment';

function App() {
  return (
    <div className="App font-sans">
      {/* <RegisDor></RegisDor> */}
      <NotiPayment></NotiPayment>
    </div>
  );
}

export default App;
