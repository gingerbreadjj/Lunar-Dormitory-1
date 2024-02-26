import React from 'react';
import './App.css';
<<<<<<< HEAD

function App() {
  return (
    <div className="App">
=======
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
      <Login></Login>
      {/* <HomeLogin></HomeLogin> */}
      {/* <Home></Home> */}
>>>>>>> 2bcc28bcb895d606e17c81ab5411e7e06c0227a6
    </div>
  );
}

export default App;
