import { useState } from "react"

export default function Counter() {
    // useState: akta variable arekta function
    const [count, setCount]=useState(0)  // initial value 0 

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)  // setCount function call with newCount parameter
    }   

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)  // setCount function call with newCount parameter
    }    
    return (
        <div style={{border: '2px solid blue', margin: '20px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}