import React, { Component } from "react";

class Education extends Component {
    render(){
        return(
            <div className="education_container">
                <h1 className="education_title">Educational experience</h1>
                <form className="education_form">
                    <input id="sName" type="text" placeholder="School Name" required></input>
                    <input id="study" type="text" placeholder="Title of Study" required></input>
                    <div className="dates">
                        <div>
                            <label>From:</label>
                            <input id="eFrom" type="date" required></input>
                        </div>
                        <div>
                            <label>Until:</label>
                            <input id="eUntil" type="date" required></input>
                        </div>
                    </div>
                    <button type="submit" className="education_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Education;