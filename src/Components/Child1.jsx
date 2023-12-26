const Child1 = (Props) =>{
    console.log(Props);
    return(
        // <h1>Hello Child1</h1>
        <div>
            {/* <h1>{Props.content[0].name}</h1> */}
            {/* <h1>{Props.content[1].name}</h1> */}
            {/* <h1>{Props.content[2].name}</h1> */}
            Hello {Props.children}
        </div>
    )
}
export default Child1