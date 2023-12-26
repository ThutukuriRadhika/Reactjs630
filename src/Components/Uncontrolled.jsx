import { useRef } from "react";
const Uncontrolled=()=>{
    let name=useRef()
    let email=useRef()
     console.log(name)
     console.log(email)
    let fetch=(e)=>{ e.preventDefault()
        let data=name.current.value
        let data1=email.current.value
        console.log(data);
        console.log(data1);
    }
    return(
        <form action="" onSubmit={fetch}>
            <label htmlFor="">name:</label>
            <input type="text" ref={name}/>
            <br /><br />
            <label htmlFor="">password</label>
            <br /><br />
            <input type="password" ref={email}/>
            <br /><br />
           <button onClick={fetch}>submit</button>

        </form>
    )
}
export default Uncontrolled