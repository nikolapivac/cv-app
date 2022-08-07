import React, { Component } from "react";
import Display from "./components/Display";
import Education from "./components/Education";
import General from "./components/General";
import Header from "./components/Header";
import Practical from "./components/Practical";
import "./styles/App.css"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      person: {},
      schools: [],
      jobs: []
    }

    this.handlePreview = this.handlePreview.bind(this);
    this.getPerson = this.getPerson.bind(this);
    this.getSchools = this.getSchools.bind(this);
    this.getJobs = this.getJobs.bind(this);
  }

  getPerson = (personInfo) => {
    this.setState({
      person: personInfo
    }, () => {console.log(this.state)})
    
  }
  getSchools = (schoolsInfo) => {
    this.setState({
      schools: schoolsInfo
    }, () => {console.log(this.state)})
    
  }
  getJobs = (jobsInfo) => {
    this.setState({
      jobs: jobsInfo
    }, () => {console.log(this.state)})
    
  }

  handlePreview = (e) => {
    e.preventDefault();
    const displayContainer = document.querySelector(".display_container");
    displayContainer.style.display = "block";
  }

  render(){
    return (
      <>
        <Header />
        <General func={this.getPerson} />
        <Education func={this.getSchools} />
        <Practical func={this.getJobs} />
        <button className="previewBtn" onClick={this.handlePreview}>Preview</button>
        <Display person={this.state.person} schools={this.state.schools} jobs={this.state.jobs}/>
      </>
    );
  }
}

export default App;
