import React from 'react';
import './App.css';
// import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Regis from './components/Regis';
import HomeLogin from './components/HomeLogin';
import { Route, Routes } from "react-router-dom"
import RegisDor from './components/RegisDor';

function App() {
  return (
    <div className="App">
      {/* <RegisDor></RegisDor> */}
      <HomeLogin></HomeLogin>
    </div>
  );
}

export default App;
