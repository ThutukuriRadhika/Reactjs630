import { useEffect } from "react";
import { useState } from "react";

const useeffect=()=>{
    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(0)
    let incre=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        console.log("hello how are you");
    },[count])
    return(
        <div>
            {count}
            <button onClick={incre}>DECREMENT</button>
            {count1}
            <button onClick={()=>{setCount1(count1+1)}}>INCREMENT</button>
        </div>
    )
}
export default useeffect