import High from "./High"
const A1 =(abc)=>{
    console.log(abc)
    return(
        <div>
        {abc.data}
        <button onClick={abc.Func}>Increment</button>
        </div>
    )

}
export default High(A1)