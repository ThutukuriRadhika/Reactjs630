import "./hotstar.css"
import picture from "./hot.png"
const Hotstar =()=>{
    return(
        <section id="nav">
            <article>
                <div className="logo">
                    <ol>
                <li><a href=""><i class="fa-solid fa-bars"></i></a></li>
                </ol>
                  <img src={picture} height="100%" width="100%"/>
                </div>
                <div className="menu" >
                    <ol>
                        <li><a href=""><i class="fa-solid fa-bars"></i></a></li>

                        <li><a href="">TV</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Sports</a></li>
                        <li><a href="">Disney+</a></li>
                        <li><a href="">KIDS</a></li>
                    </ol>
                    </div>
                    <div className="search">
                        
                           <a href=""><input type="text" /><i class="fa-solid fa-magnifying-glass"></i></a>
                           <button style={{backgroundcolor:'skyblue'}}>SUBSCRIBE</button>
                            <a href="">LOGIN</a>
                            
                    

                    </div>
            </article>

        </section>
    )
}
export default Hotstar