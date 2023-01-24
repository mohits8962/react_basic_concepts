import React, { Component } from "react";

export class CFunctionClick extends Component {
    constructor(props) {
        super(props)
        // this.changeEvent = this.changeEvent.bind(this)

        this.state = {
            course: "MCA",
            roll: this.props.roll
        }
    }

    // bind krne pe aisaa
    // changeEvent() {
    //     // console.log("hello event handling")
    //     // after bindig we can access the state 
    //     console.log("hello mohit you are joined for", this.state.course)
    // }

    // bina bind k hume normal fucntion k jagah arrow function use krna hoga
    changeEvent = () => {
        this.setState({
            course: "BCA"
        })
        console.log("hello mohit you are joined for", this.state.course, "and your roll number is", this.props.roll)
    }

    render() {
        const numbers = [3, 4, 5, 6, 7]
        const newNumbers = numbers.map((num) => {
            return <li>{num}</li>
        })
        return (
            <>
                <button onClick={this.changeEvent} >Click to see example of event handling in class based</button>
                <ul key={newNumbers} >{newNumbers}</ul>
            </>
        )
    }
}

export default CFunctionClick;
