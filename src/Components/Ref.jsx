import { useRef } from "react"
const Ref =()=>{
    let demoRef = useRef()
    console.log(demoRef);
    let color=()=>{
        demoRef.current.style.background="Red"
    }
    return(
        <div>
        <h1 ref={demoRef}>HEADING</h1>
        <button onClick={color}>CLICK</button>
        </div>
    )
}
export default Ref
