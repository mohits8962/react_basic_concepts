import React, { Component } from "react";
import C from "../Optimised/ComponentC";
import B from "./ComponentB";

import { Provider } from "./Context";

export class ComponentA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Mohit Sahu",
            roll: 29
        }
    }

    handleClickContext = () => {
        this.setState({ roll: this.state.roll + 1 })
    }


    render() {
        const contextValue = {
            data: this.state,
            handleCheck: this.handleClickContext
        }

        return (
            <div>
                <h1>Component A</h1>

                <Provider value={contextValue}>
                    <B />
                    <C />
                </Provider>
            </div>
        )
    }
}

export default ComponentA;
