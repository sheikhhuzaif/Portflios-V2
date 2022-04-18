import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./temp5.css";
import { Switch } from "@material-ui/core";
import Background from './coffee-apple.jpg'
import Home from "./components/Home.jsx";
import WorkExp from "./components/WorkExp.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import About2 from "./components/About2";

function Temp5() {
    return (
        <main>
            {/* <Portfolio/> */}
            {/* <Navbar/> */}
            <Router>
            {/* <CssBaseline /> */}
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About2/>} />
                <Route exact path="/exp" element={<WorkExp/>} />
                <Route exact path="/skills" element={<Skills/>} />
                <Route exact path="/education" element={<Education/>} />
                <Route exact path="/contact" element={<Contact/>} />
            </Routes>
        </Router>

{/* 
        <React.Fragment>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </React.Fragment> */}
        </main>

      
    );
}

export default Temp5;
