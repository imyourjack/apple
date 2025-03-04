import { useState } from "react";
import UserName from "./UserName";

export default function PropsTesting(props) {
  const [name, setName] = useState("JJ")
  const msg = props.age > 19 ? "성인" : "미성년자";
  return (
    <div>
      <h2 id="name">
        {name}({props.age} : {msg})
      </h2>
      <UserName name={name}/>
    </div>
  )
}