import './App.css';
import React from 'react';
import HomeScreen from './homePage/Homescreen';
import Login from './login/login';
import SignUp from './signup/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      
      </Routes>
    </Router>
  );
}

export default App;
