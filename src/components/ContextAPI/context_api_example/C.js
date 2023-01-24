import React, { Component } from "react";
import { myContext } from './A'

export class C extends Component {
    render() {
        return (
            <div>
                <h1>Component C</h1>
                <myContext.Consumer>{data => <h3>{data.roll}</h3>}</myContext.Consumer>
            </div>
        )
    }
}

export default C;
