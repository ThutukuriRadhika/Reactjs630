import { Component } from "react";
class ClsStates extends Component{
    constructor(){
        super()
        this.state={
            name:"Good-Afternoon"
        }
    }
     btn=()=>{
         this.setState({
             name:"good-evening"
         }

         )
     }
    render(){
        return(
            //   <h1>Class Based Components</h1>
             <div>
                 {this.state.name}
                 <button onClick={this.btn}>Dynamic</button>
             </div>
        )
    }
}
export default ClsStates