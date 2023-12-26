import { Fragment,useState } from "react"
import content from "./userData.json"

const List=()=>{
    let [info,setData]=useState(content)
    return(
        <div>
            {info.map((a)=>{
                return(
                <Fragment key={a.id}>
                        <h1>{a.login}</h1>
                        <img src={a.avatar_url} alt="" />
                    </Fragment>
                )
            }
            )
            }
        </div>
    )
}
export default List