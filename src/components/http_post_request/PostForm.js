import React, { Component } from "react";
import axios from "axios";


export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userID: "",
            title: "",
            body: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { userID, title, body } = this.state

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label >userID</label>
                        <input type="text" value={userID} name="userID" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label >title</label>
                        <input type="text" value={title} name="title" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label >body</label>
                        <input type="text" value={body} name="body" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;
