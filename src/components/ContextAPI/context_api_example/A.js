import React, { Component } from "react";
import C from "../context_api_example/C";
import B from "./B";

export const myContext = React.createContext()

export class A extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Mohit Sahu",
            roll: 29
        }
    }


    render() {
        return (
            <div>
                <h1>Component A</h1>
                <myContext.Provider value={this.state}>
                    <B />
                    <C />
                </myContext.Provider>
            </div>
        )
    }
}

export default A;
