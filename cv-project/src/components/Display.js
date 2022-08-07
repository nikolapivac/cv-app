import React, { Component } from "react";

class Display extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="display_container">
                <div className="display_general">
                    <h1 className="display_section_title">General information</h1>
                    <p><strong>First Name:</strong> {this.props.person.fName}</p>
                    <p><strong>Last Name:</strong> {this.props.person.lName}</p>
                    <p><strong>E-mail:</strong> {this.props.person.email}</p>
                    <p><strong>Phone Number:</strong> {this.props.person.phone}</p>
                </div>
                <div className="display_education">
                    <h1 className="display_section_title">Education experience</h1>
                    {this.props.schools.map(school => {
                        return(
                            <div className="school_card">
                                <p className="sc_dates">{school.eFrom} - {school.eUntil}</p>
                                <h3 className="sc_school">{school.sName}</h3>
                                <p className="sc_study">Study: {school.study}</p>
                            </div> 
                        )   
                    })}
                </div>
                <div className="display_practical">
                    <h1 className="display_section_title">Practical Experience</h1>
                    {this.props.jobs.map(job => {
                        return(
                            <div className="job_card">
                                <p className="jc_dates">{job.pFrom} - {job.pUntil}</p>
                                <h3 className="jc_company">{job.cName}</h3>
                                <p className="jc_position">Position: {job.position}</p>
                            </div> 
                        )   
                    })}
                </div>
            </div>
        )
    }
}

export default Display;