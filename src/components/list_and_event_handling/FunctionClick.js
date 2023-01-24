import React from "react";

function FunctionClick() {
    function changeEvent() {
        console.log("hello event handling")
    }

    return (
        <div>
            <button onClick={changeEvent} >Click to see example of event handling</button>
        </div>
    )
}

export default FunctionClick;
