import React, { Component } from "react";

export class C extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                {this.props.name}
            </div>
        )
    }
}

export default C;
