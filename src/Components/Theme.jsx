const Theme=()=>{
    let dark=()=>{
        document.body.style.background="Black"
        document.body.style.color="White"
    }
    let light=()=>{
        document.body.style.background="Pink"
        document.body.style.color="Black"

    }
    return(
        <div>
            <h1>DARK AND LIGHT THEME</h1>
            DARK
            <input type="radio" name="abc" onClick={dark} />
            LIGHT
            <input type="radio" name="abc" onClick={light}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe autem consectetur nesciunt itaque sint numquam aut adipisci culpa incidunt corporis maiores, et officia laboriosam quibusdam tempora quaerat est eveniet sequi? Molestias commodi neque, ipsa quo velit debitis libero nam quia, cum aspernatur excepturi ut odio eaque sequi accusantium quibusdam recusandae asperiores fugiat. Nihil dolor rerum at doloremque. Doloremque alias numquam consequuntur neque tenetur iste a odio repellendus, quam maiores id itaque asperiores deleniti ut illo? Vitae vero nisi, accusantium at aperiam enim dolor aliquid sapiente quas porro deserunt beatae fuga dolores atque quisquam consequatur praesentium modi aspernatur nam doloribus.</h6>


        </div>
    )

}
export default Theme