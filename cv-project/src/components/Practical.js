import React, { Component } from "react";

class Practical extends Component {
    render(){
        return(
            <div className="practical_container">
                <h1 className="practical_title">Practical experience</h1>
                <form className="practical_form">
                    <input id="cName" type="text" placeholder="Company Name" required></input>
                    <input id="position" type="text" placeholder="Position Title" required></input>
                    <div className="dates">
                        <div>
                            <label>From:</label>
                            <input id="pFrom" type="date" required></input>
                        </div>
                        <div>
                            <label>Until:</label>
                            <input id="pUntil" type="date" required></input>
                        </div>
                    </div>
                    <button type="submit" className="practical_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Practical;