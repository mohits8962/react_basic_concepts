import React, { Component } from "react";
import { myContext } from './A'

export class B extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <myContext.Consumer>{data => <h3>{data.name}</h3>}</myContext.Consumer>
            </div>
        )
    }
}

export default B;
