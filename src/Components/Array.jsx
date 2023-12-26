import { useState } from "react";

const Array = () =>{
    let [data, setData] = useState(["hi","hello","how are you"])
    return(
        <div>
             {data[2]} 
           {/* <h1>{data[0]}</h1>
           <h1>{data[1]}</h1>
           <h1>{data[2]}</h1> */}
        </div>
    )
}
export default Array