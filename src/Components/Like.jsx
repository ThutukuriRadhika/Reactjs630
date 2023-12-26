import { useState } from "react"
const Like = () =>{
    let [count , setcount ] = useState(0)
    let incre=()=>{
        setcount(count+1)
    }
    return(
        <div>
            <h1>Like</h1>
            <i class="fa-sharp fa-solid fa-heart" onClick={incre}></i> 
            {/* <button onClick={incre}>Like</button> */}
            <sup>{count}</sup>
        </div>
    )
}
export default Like