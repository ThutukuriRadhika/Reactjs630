import React from 'react'

const Title = () => {
    console.log("Rendering title");
    return(
        <div>Title</div>
    )
}
export default React.memo(Title)