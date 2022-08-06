import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fName: "",
            lName: "",
            email: "",
            phone: ""
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
            <div className="general_container">
                <h1 className="general_title">General information</h1>
                <form className="general_form" onSubmit={this.handleSubmit}>
                    <input id="fName" name="fName" type="text" placeholder="First Name" onChange={this.handleChange} value={this.state.fName} required></input>
                    <input id="lName" name="lName" type="text" placeholder="Last Name" onChange={this.handleChange} value={this.state.lName} required></input>
                    <input id="email" name="email" type="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email} required></input>
                    <input id="phone" name="phone" type="text" placeholder="Phone number" onChange={this.handleChange} value={this.state.phone} required></input>
                    <button type="submit" className="general_submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default General;