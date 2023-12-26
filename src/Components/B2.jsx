import React, { useContext } from "react"
import {user} from '../App'
const B2 = () => {
    let content = useContext(user)
    return(
        <div>
            {content}
        </div>
    )
}
export default B2