import React, { useState, useEffect } from "react";

export default function UseStateWithPreviousState() {

    const channelName = useState("Graphic Designer")
    const [name, setName] = useState("neemohh");
    const [count, setCount] = useState(0)

    const handleClick = () => {
        channelName[1]("Developer")
        setName("Mohit sahu")
    }

    const Incremented = () => {
        for (let i = 0; i < 10; i++) {
            setCount(preCount => preCount + 1)
        }
    }
    useEffect(() => {
        console.log("jai shree ram")
    }, [count]);



    return (
        <>
            <h1>{channelName}</h1>
            <p>{name}</p>
            <button type="button" onClick={handleClick}>Click Me</button>
            <button type="button" onClick={Incremented}>Increment by 10 - {count}</button>
        </>
    )
};


