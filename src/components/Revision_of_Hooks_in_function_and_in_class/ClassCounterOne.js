import React, { Component } from "react";

export class ClassCounterOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("componentDidMount run")
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate run")
        document.title = `clicked ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click Me {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounterOne;
