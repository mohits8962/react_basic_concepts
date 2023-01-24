import React, { Component } from "react";
import C from "./C";

export class B extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <C name={this.props.name} />
            </div>
        )
    }
}

export default B;
