import React, { Component } from "react";

import { Consumer } from "./Context";

export class ComponentB extends Component {
    render() {
        return (
            <div>
                <h1>Component B</h1>
                <Consumer>
                    {
                        ({ data, handleCheck }) => (
                            <div>
                                <h3>{data.name}, {data.roll}</h3>
                                <button onClick={handleCheck}>Click To Change RollNo</button>
                            </div>
                        )
                    }

                </Consumer>
            </div>
        )
    }
}

export default ComponentB;
