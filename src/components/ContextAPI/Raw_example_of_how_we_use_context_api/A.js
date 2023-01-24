import React, { Component } from "react";
import B from "./B";

export class A extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Mohit Sahu"
        }
    }


    render() {
        return (
            <div>
                <h1>Component A</h1>
                <B name={this.state.name} />
            </div>
        )
    }
}

export default A;
