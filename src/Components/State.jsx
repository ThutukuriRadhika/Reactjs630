import { useState } from "react";
const State = ()=>{

    let [data ,setData] = useState("Hungry")

    let chicken=()=>{
        setData("my stomach is full")
    }
        return(
            <div>
                {data}
                <button onClick={chicken}>Food</button>
            </div>
        )
    }

export default State