import React, { Component } from "react";
import Education from "./components/Education";
import General from "./components/General";
import Header from "./components/Header";
import Practical from "./components/Practical";
import "./styles/App.css"

class App extends Component {
  render(){
    return (
      <>
        <Header />
        <General />
        <Education />
        <Practical />
      </>
    );
  }
}

export default App;
