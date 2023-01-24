import React, { Component } from "react";

export class PrevPropsPrevState extends Component {
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
        console.log(prevState.count)                // prevState hume pehle waali value dega 
        console.log(this.state.countcount)          // or this.state.count hume update k baad waali value dega (after update value)
        if (prevState.count !== this.state.count) {
            console.log("Testing....")
            document.title = `clicked ${this.state.count} times`
        }

    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Click Me {this.state.count}</button>
            </div>
        )
    }
}

export default PrevPropsPrevState;
