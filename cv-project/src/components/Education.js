import React, { Component } from "react";

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            school: {
                sName: "",
                study: "",
                eFrom: "",
                eUntil: ""
            },
            schools: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = (e) => {
        e.preventDefault();
        const eform = document.querySelector(".eformToHide");
        eform.style.display = "flex";
        const submitBtn = document.querySelector(".education_submit");
        submitBtn.style.display = "block";
        const addBtn = document.querySelector(".eAdd");
        addBtn.style.display = "none";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const eform = document.querySelector(".eformToHide");
        eform.style.display = "none";
        const submitBtn = document.querySelector(".education_submit");
        submitBtn.style.display = "none";
        const addBtn = document.querySelector(".eAdd");
        addBtn.style.display = "block";

        this.setState({
            schools: this.state.schools.concat(this.state.school)
        }, () => {this.props.func(this.state.schools)})
    }

    handleChange = (e) => {
        this.setState({
            school: {
                ...this.state.school,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <div className="education_container">
                <h1 className="education_title">Educational experience</h1>
                <form className="education_form" onSubmit={this.handleSubmit}>
                    <div className="eformToHide">
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
                    </div>
                    <button className="eAdd" onClick={this.handleAdd}>Add New</button>
                    <button type="submit" className="education_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Education;