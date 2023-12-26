import { useState } from "react"
const Assign1 = () => {
    let [count,setCount] = useState(0)
    let [count1,setCount1] = useState(0)
    let [count2,setCount2] = useState(0)
    let fir=(e)=>{
        setCount(e.target.value)
    }
    let sec=(e)=>{
        setCount1(e.target.value)
    }
    let add=(e)=>{
        e.preventDefault()

        setCount2(parseInt(count)+parseInt(count1))
    }
    let sub=(e)=>{
        e.preventDefault()
        setCount2(count-count1)
    }

    let mul=(e)=>{
        e.preventDefault()
        setCount2(count*count1)
    }
    return(
        <div>
            <form action="">
          <label htmlFor="">ENTER FIRST NUMBER</label> <br />
          <input type="number" onChange={fir}/><br />

          <label htmlFor="">ENTER SECOND NUMBER</label><br /> 
           <input type="number" onChange={sec}/> <br /> <br />
           
            <button onClick={add}>+</button>  
            <button onClick={sub}>-</button> 
            <button onClick={mul}>*</button>
            <button>Clear</button> <br />
            {count2}
           
            </form>
        </div>
    )
}
export default Assign1