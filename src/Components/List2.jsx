import { useState } from "react"
import Dummy from "./userData.json"
const List2 =()=>{
    let [data,setData] = useState(Dummy)
    return(
        <div>
            {data.map((x)=>{
                return(
                    <div>
                    <h1>{x.login}</h1>
                    <h2>{x.id}</h2>
                    <img src={x.avatar_url} alt="" />

                    </div>
                )
            }
            )
            }
        </div>
    )
}
export default List2