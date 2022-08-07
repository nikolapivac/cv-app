import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                fName: "",
                lName: "",
                email: "",
                phone: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit = (e) => {
        e.preventDefault();
        const gform = document.querySelector(".gformToHide");
        gform.style.display = "flex";
        const submitBtn = document.querySelector(".general_submit");
        submitBtn.style.display = "block";
        const editBtn = document.querySelector(".gEdit");
        editBtn.style.display = "none";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const gform = document.querySelector(".gformToHide");
        gform.style.display = "none";
        const submitBtn = document.querySelector(".general_submit");
        submitBtn.style.display = "none";
        const editBtn = document.querySelector(".gEdit");
        editBtn.style.display = "block";

        this.props.func(this.state.person);
    }

    handleChange = (e) => {
        this.setState({
            person: {
                ...this.state.person,
                [e.target.name]: e.target.value,
            }
        });
    }

    
    render(){
        return(
            <div className="general_container">
                <h1 className="general_title">General information</h1>
                <form className="general_form" onSubmit={this.handleSubmit}>
                    <div className="gformToHide">
                        <input id="fName" name="fName" type="text" placeholder="First Name" onChange={this.handleChange} value={this.state.fName} required></input>
                        <input id="lName" name="lName" type="text" placeholder="Last Name" onChange={this.handleChange} value={this.state.lName} required></input>
                        <input id="email" name="email" type="email" placeholder="E-mail" onChange={this.handleChange} value={this.state.email} required></input>
                        <input id="phone" name="phone" type="text" placeholder="Phone number" onChange={this.handleChange} value={this.state.phone} required></input>
                    </div>
                    <button className="gEdit" onClick={this.handleEdit}>Edit</button>
                    <button type="submit" className="general_submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default General;