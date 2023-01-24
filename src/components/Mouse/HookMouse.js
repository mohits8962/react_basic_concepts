import React, { useEffect, useState } from "react";

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logmousemove = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useeffect called")
        window.addEventListener("mousemove", logmousemove)
    })

    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
};

export default HookMouse;
