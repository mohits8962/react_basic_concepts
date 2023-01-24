// react router dom

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

export default function Routing1() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/contact"><Contact/></Route>
            </Switch>
        </Router>
    )
}

function Home() {
    return <h1>Hello Home</h1>
}

function About() {
    return <h1>Hello About</h1>
}

function Contact() {
    return <h1>Hello Contact</h1>
}