import { useState } from "react";
import World from "./World"

export default function Hello() {

  const [age, setAge] = useState("");

  function showName() {
    alert("hey")
  }
  function showAge(age) {
    alert(`${age}`)
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>show name</button>
      <button
        onClick={() => {
          alert("hey guy")
        }}
      >
        show name
      </button>
      <input type="text"
      placeholder="Enter your age"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={() => showAge(age)}>show age</button>
    </div>
  )
}
