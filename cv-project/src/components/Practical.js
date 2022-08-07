import React, { Component } from "react";

class Practical extends Component {
    constructor(props) {
        super(props);

        this.state = {
            job: {
                cName: "",
                position: "",
                pFrom: "",
                pUntil: ""
            },
            jobs: [], 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd = (e) => {
        e.preventDefault();
        const pform = document.querySelector(".pformToHide");
        pform.style.display = "flex";
        const submitBtn = document.querySelector(".practical_submit");
        submitBtn.style.display = "block";
        const addBtn = document.querySelector(".pAdd");
        addBtn.style.display = "none";
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const pform = document.querySelector(".pformToHide");
        pform.style.display = "none";
        const submitBtn = document.querySelector(".practical_submit");
        submitBtn.style.display = "none";
        const addBtn = document.querySelector(".pAdd");
        addBtn.style.display = "block";

        this.setState({
            jobs: this.state.jobs.concat(this.state.job)
        }, () => {this.props.func(this.state.jobs);})
    }

    handleChange = (e) => {
        this.setState({
            job: {
                ...this.state.job,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return(
            <div className="practical_container">
                <h1 className="practical_title">Practical experience</h1>
                <form className="practical_form" onSubmit={this.handleSubmit}>
                    <div className="pformToHide">
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
                    </div>
                    <button className="pAdd" onClick={this.handleAdd}>Add New</button>
                    <button type="submit" className="practical_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Practical;