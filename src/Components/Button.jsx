import React from 'react'

const Button = (x)=>{
    console.log("rendering", x.children);
    return(
        <div>
            <button onClick={x.Func}>{x.children}</button>
        </div>
    )
}
export default React.memo(Button)