import React, { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0);

   const handleClick = ()=>{
        setCount(count + 1)
    }

    return (
        <div>
            <p>Counter</p>
            <p>{count}</p>
            <button onClick={() => handleClick()}>Click Me</button>
        </div>
    )
}