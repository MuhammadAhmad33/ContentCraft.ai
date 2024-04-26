import './App.css';
import React from 'react';
import HomeScreen from './homePage/Homescreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homescreen" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
