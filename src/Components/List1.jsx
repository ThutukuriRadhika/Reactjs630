import { useState } from "react"
const List1=() =>{
    let [ data , setData] = useState(["hello","hi","had-lunch"])
    return(
        <div>
            {
                data.map((x)=>{
                    return(
                        <h1>{x}</h1>
                    )
            })
        }
     </div>
    )
}
export default List1