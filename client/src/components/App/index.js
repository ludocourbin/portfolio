// // Modules
// import React from "react";
import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

// // Components
import Header from "../Header";
import About from "../About";
import Project from "../Project";
import Contact from "../Contact";
import Navbar from "../Navbar";

import "./style.scss";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Section 1" id="section1" />
        <About title="Section 2" id="section2" />
        <Project title="Section 3" id="section3" />
        <Contact title="Section 4" id="section4" />
        <Navbar />
      </div>
    );
  }
}

export default App;
