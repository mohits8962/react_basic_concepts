import React from "react";


class Channel extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: "Hello neemohh"
        }
    }

    changingName = () => {
        this.setState({
            msg:"Hello mohit bhaiii"
        })
    }


    render() {
        return (
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changingName}>click Me</button>
            </>
        )
    }
}

export default Channel;