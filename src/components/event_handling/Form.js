import React, { Component } from "react";

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            Address: ""
        }
    }

    handleUserName = (event) => {
        // event.preventDefault()
        this.setState({
            userName: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            Address: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.Address}`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" value={this.state.userName} onChange={this.handleUserName} />
                    </div>
                    <div>
                        <label>Address</label>
                        <input type="text" value={this.state.Address} onChange={this.handleAddress} />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;
