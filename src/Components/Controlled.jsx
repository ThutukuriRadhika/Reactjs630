import { useState } from "react"

const Controlled =()=>{
    let [name,setName] = useState("")
    let [Email, setEmail] = useState("")
    let nameData=(e)=>{
        //console.log(e);
        console.log(e.target.value);
        setName(e.target.value)
    }
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
    let submitData=(e)=>{
        e.priventDefault()
        console.log(name);
        console.log(Email);
    }
    return(
        <form>
            <label>Name</label>
            <input type="text"  value={name} onChange={nameData}/>
            <label>Email</label>
            <input type="Email" value={Email} onChange={emailData} />
              <button onClick={submitData}>Submit</button>
        </form>
    )
}
export default Controlled