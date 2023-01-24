import React, { useState } from "react";

function UseStateWithObject() {
  const [name, setName] = useState({ firstName: "", lastName: "" })

  return (
    <div>
      <h1>Hook Object Practise Form</h1>
      <form >
        <h2>First Name</h2>
        <input type="text" value={name.firstName} onChange={e => { setName({ ...name, firstName: e.target.value }) }} />
        <h2>Last Name</h2>
        <input type="text" value={name.lastName} onChange={e => { setName({ ...name, lastName: e.target.value }) }} />
      </form>
      <h1>Output</h1>
      {name.firstName}
      {name.lastName}
    </div>
  )
}
export default UseStateWithObject;
