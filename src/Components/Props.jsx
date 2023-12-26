const Props = (content) =>{
    console.log(content);
    return(
        <div>
        <h1>
            {/* Hello {abc.data} */}
            {content.data[1]}
        </h1>
        <h1>
            {content.data[0]}
        </h1>
        <h1>
            {content.data[2]}
        </h1>
        </div>
    )
}
export default Props
