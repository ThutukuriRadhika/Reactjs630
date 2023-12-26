import High from "./High"
const B1=(props)=>{
    return(
        <div>
           {props.data}
           <button onMouseOver={props.Func}>Increment</button>

        </div>
    )


}
export default High(B1)