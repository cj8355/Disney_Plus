import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        {/* <Route path="/detail">
          <Detail />
        </Route> */}
        <Route path="/detail" element={<Detail />} /> 
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
