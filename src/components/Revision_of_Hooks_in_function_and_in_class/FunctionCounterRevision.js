import React, { useState, useEffect } from "react";

const FunctionCounterRevision = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [name, setName] = useState(0)

    useEffect(() => {
        console.log("useEffect run")
        document.title = `clicked ${count} times`
    }, [count, count1, name])

    return (
        <div>
            <input type="text" value={name} onChange={e => { setName(e.target.value) }} />
            <button onClick={() => { setCount(count + 1) }}> Click Me for countState{count} times</button>
            <button onClick={() => { setCount1(count1 + 1) }}> Click Me for count1State {count1} times</button>
        </div>
    )
};

export default FunctionCounterRevision;
