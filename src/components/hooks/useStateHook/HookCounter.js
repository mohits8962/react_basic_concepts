import React, { useState } from "react";

export default function HookCounter() {

    const channelName = useState("Graphic Designer")
    // neeche wale step ko mila k mtlab destrucure krke y step bangya
    const [name, setName] = useState("neemohh");

    // // zero pe graphic designer set hai or 1 pe mai Mohit sahu set krwaa raha hu
    // const name = channelName[0]
    // const setName = channelName[1]


    // // first way
    // const stateHandler = () => {
    //     channelName[1]("Mohit sahu")
    // }


    // // Second way
    // const stateHandler = () => {
    //     setName("Mohit sahu")
    // }


    const handleClick = () => {
        channelName[1]("Developer")
        setName("Mohit sahu")
    }



    return (
        <>
            <h1>{channelName}</h1>
            <p>{name}</p>
            {/* <button type="button" onClick={stateHandler}>Click Me</button> */}
            <button type="button" onClick={handleClick}>Click Me</button>
        </>
    )
};


