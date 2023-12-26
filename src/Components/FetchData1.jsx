import axios from "axios"
import { useEffect,useState } from "react"

const FetchData1=()=>{
    let [content,setContent] = useState([])
    let [id,setId] = useState("")
    let [btn,setBtn] = useState("")

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

.then((response)=>{
    console.log(response.data);
    setContent(response.data)
})
},[btn])
let formhandle=()=>{
    setBtn(id)
}
return(
    <div>
        {/* {content.map((x)=>{
            return(
                <div>
                <h1>{x.id}</h1>
                <h1>{x.name}</h1>
            </div>
            )
            
        })} */}
   <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
   <button onClick={formhandle}>Submit</button>
    {content.title}
    </div>
)}
export default FetchData1