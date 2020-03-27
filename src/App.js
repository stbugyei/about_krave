import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Banner from "./components/banner";
import WhyWeDo from "./components/whyWeDo";
import WhatWeDo from "./components/whatWeDo";
import Careers from "./components/careers";
import Navbar from "./components/navBar";
import Press from "./components/press";
import Footer from "./components/footer";
import "./App.css";


function App() {
  return (
    <div className='head'>
      <div className='container'>
        <div className='wrapper'>
          <Router>
            <Navbar /> 
            <Route path="/" component={WhyWeDo}></Route>
            <Route path="/whatWeDo" component={WhatWeDo}></Route>
            <Route path="/careers" component={Careers}></Route>
            <Route path="/press" component={Press}></Route>
            <Footer/>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App

