import React, { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            qty: this.props.qty
        }
    }

    // updateQTY = () => {
    //     this.setState({
    //         qty: this.state.qty + 1
    //     })
    // }

    static getDerivedStateFromProps(props, state) {
        console.log(props.qty)
        console.log(state.qty)

        if (props.qty !== state.qty) {
            return { qty: props.qty }
        }
        else {
            return null
        }
    }

    componentDidMount() {
        console.log("Execute after component render")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Updated")
    }


    render() {
        return (
            <div>
                <h1>CART:{this.state.qty}</h1>
                <button onClick={this.updateQTY}>UPDATE QUANTITY</button>
            </div>
        )
    }
}

export default Cart;