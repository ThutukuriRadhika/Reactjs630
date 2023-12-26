import React, { useState } from 'react'
import { useMemo } from 'react'
const Usemem = () => {
    let [count1,setCount1] = useState(0)
    let [count2,setCount2] = useState(0)

    let Even=useMemo(()=>{
        let i=0
        while(i<10000000)i++
        return count1%2==0
 },[count1])
    return(
        <div>
            {count1} <br />
            <button onClick={()=>{setCount1(count1+1)}}>INCREMENT</button> <br />
            {Even?"EVEN":"ODD"} <br />
            {count2} <br />
            <button onClick={()=>{setCount2(count2+1)}}>INCREMENT2</button>
        </div>
    )
}
export default Usemem