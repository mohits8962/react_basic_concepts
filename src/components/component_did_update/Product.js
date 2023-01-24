import React, { Component } from "react";
import Cart from "./Cart";

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProductID: "",
            qty: 0
        }
    }

    addToCart = (pid) => {
        this.setState({
            ProductID: pid,
            qty: this.state.qty + 1
        })
    }

    render() {
        return (
            <>
                <div>
                    <button onClick={() => { this.addToCart(1) }}>AD TO CART</button>
                    <Cart ProductID={this.state.ProductID} qty={this.state.qty} />
                </div>
            </>
        )
    }
}

export default Product;



