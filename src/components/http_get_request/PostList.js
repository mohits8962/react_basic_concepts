// using axios and life cycle methods
// using component did mount to fetch data

import React, { Component } from "react";
import axios from 'axios'

export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            post: [],
            error: ""
        }
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    post: response.data
                })
                console.log(response)
            })
            .catch(error => {
                this.setState({
                    error: 'URL Error'
                })
                console.log(error)
            })
    }

    render() {
        const { post, error } = this.state
        return (
            <div>
                <h1>List Post Data</h1>
                {
                    post.length ? post.map(post => <div key={post.id}> <b>{post.title}</b>{post.body} </div>) : null
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default PostList;
