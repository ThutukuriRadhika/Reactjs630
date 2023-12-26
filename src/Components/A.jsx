import { useState } from "react"
const A =()=>{
    let [count,setCount] = useState(0)
    let incre=()=>{ setCount(count+1)}

return(
    <div>
        {count}
        <button onClick={incre}>Increment</button>
    </div>
)
}
export default A