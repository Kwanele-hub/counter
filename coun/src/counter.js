import React, { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);

   const  add = ()=>{
        setCount(count + 1)
    }
    const reduce =()=>{
        setCount(count - 3)
    }

    return (
        <div>
            <p>Counter</p>
            <p>{count}</p>
            <button onClick={() => add()}>Increment</button>
            <button onClick={() => reduce()}>Decrement</button>
        </div>
    )
}