import React, { Component } from "react";
import subjects from './HOC'

export class Ajay extends Component {
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
                <h2 onMouseOver={this.marksIncremented}>Ajay Marks - {this.state.marks}, {this.props.hocSub}</h2>
            </div>
        )
    }
}

export default subjects(Ajay);
