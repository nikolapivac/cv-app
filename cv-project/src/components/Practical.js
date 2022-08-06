import React, { Component } from "react";

class Practical extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cName: "",
            position: "",
            pFrom: "",
            pUntil: ""
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
            <div className="practical_container">
                <h1 className="practical_title">Practical experience</h1>
                <form className="practical_form" onSubmit={this.handleSubmit}>
                    <input id="cName" name="cName" type="text" placeholder="Company Name" onChange={this.handleChange} value={this.state.cName} required></input>
                    <input id="position" name="position" type="text" placeholder="Position Title" onChange={this.handleChange} value={this.state.position} required></input>
                    <div className="dates">
                        <div>
                            <label>From:</label>
                            <input id="pFrom" name="pFrom" type="date" onChange={this.handleChange} value={this.state.pFrom} required></input>
                        </div>
                        <div>
                            <label>Until:</label>
                            <input id="pUntil" name="pUntil" type="date" onChange={this.handleChange} value={this.state.pUntil} required></input>
                        </div>
                    </div>
                    <button type="submit" className="practical_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Practical;