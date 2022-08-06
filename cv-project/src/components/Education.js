import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sName: "",
            study: "",
            eFrom: "",
            eUntil: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return(
            <div className="education_container">
                <h1 className="education_title">Educational experience</h1>
                <form className="education_form" onSubmit={this.handleSubmit}>
                    <input id="sName" name="sName" type="text" placeholder="School Name" onChange={this.handleChange} value={this.state.sName} required></input>
                    <input id="study" name="study" type="text" placeholder="Title of Study" onChange={this.handleChange} value={this.state.study} required></input>
                    <div className="dates">
                        <div>
                            <label>From:</label>
                            <input id="eFrom" name="eFrom" type="date" onChange={this.handleChange} value={this.state.eFrom} required></input>
                        </div>
                        <div>
                            <label>Until:</label>
                            <input id="eUntil" name="eUntil" type="date" onChange={this.handleChange} value={this.state.eUntil} required></input>
                        </div>
                    </div>
                    <button type="submit" className="education_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Education;