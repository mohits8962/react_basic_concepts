import React, { useState, useEffect } from "react";

export default function HookController2() {

    const channelName = useState("Graphic Designer")
    const [name, setName] = useState("neemohh");
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(0)


    const handleClick = () => {
        channelName[1]("Developer")
        setName("Mohit sahu")
    }

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        console.log("jai shree ram")
    }, [counter, count]);



    return (
        <>
            <h1>{channelName}</h1>
            <p>{name}</p>
            <button type="button" onClick={handleClick}>Click Me</button>
            <button type="button" onClick={Increment}>Increment{count}</button>
            <button type="button" onClick={Decrement}>Decrement{counter}</button>
        </>
    )
};


