import React, { Component } from "react";

export class Shushant extends Component {
    constructor(props) {
        super(props)

        this.state = {
            marks: 0
        }
    }

    marksIncremented = () => {
        this.setState({
            marks: this.state.marks + 1
        })
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.marksIncremented}>Shushant Marks - {this.state.marks}</h2>
            </div>
        )
    }
}

export default Shushant;
