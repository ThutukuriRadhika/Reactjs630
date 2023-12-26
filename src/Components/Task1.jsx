import { useState } from "react"

const Task1 = () =>{
    let [data,setData] = useState(0)

    let incre =()=>{
        setData(data+1)
    }
    let decre =()=>{
        setData(data-1)
    }
    let reset =()=>{
        setData(0)
    }
    return(
        <div>
            {data}
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Task1