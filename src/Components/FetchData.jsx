import axios from "axios"
import { useEffect,useState } from "react"

const FetchData=()=>{
    let [ content, setContent] = useState([])
     let [id,setId] = useState("")

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
             setContent(response.data)
            //   console.log(response.data);
        })
        .catch(()=>{
          console.log("please give me Data");
        })
 },[id])
   let idData=(e)=>{
      setId(e.target.value)
}

   console.log(id);
    return(
        <div>
            {/* {content.map((x)=>{
                return(
                    <div>
                        <h1>{x.id}</h1>
                        <h1>{x.title}</h1>
                    </div>
                )
            })}
        Hiii */}
        <input type="text" value={id} onChange={idData}/>
        {content.title}
        </div>
    )
}
export default FetchData