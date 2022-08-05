import React, { Component } from "react";

class General extends Component {
    render(){
        return(
            <div className="general_container">
                <h1 className="general_title">General information</h1>
                <form className="general_form">
                    <input id="fName" type="text" placeholder="First Name" required></input>
                    <input id="lName" type="text" placeholder="Last Name" required></input>
                    <input id="email" type="email" placeholder="E-mail" required></input>
                    <input id="phone" type="text" placeholder="Phone number" required></input>
                    <button type="submit" className="general_submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default General;