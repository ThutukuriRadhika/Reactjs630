import "./zee5.css"
import picture from "./logo4.png"

const Zee5=()=>{
    return(
        <section id="nav">
            <article>
                <div className="Logo">
                <img src={picture} height="100%" width="100%"/>
                </div>
                <div className="Menu">
                <ol>
                    <li><a href="">Home</a></li>
                    <li><a href="">TV Shows</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Web Series</a></li>
                    <li><a href="">News</a></li>
                    <li><a href=""><i class="fa-solid fa-table-cells"></i></a></li>
                    </ol>
                    </div>
                    <div className="Search">
                        <ol>
                        <li><a href="" ><i class="fa-solid fa-magnifying-glass"></i><input type="text" /></a></li>
                        <li><a href="">A</a></li>
                        <li><a href="" className="log"><button>LOGIN</button></a></li>
                        <li><a href=""><button className="buy"><i class="fa-solid fa-crown"></i>BUY PLAN</button></a></li>
                        <li><a href=""><i class="fa-solid fa-bars"></i></a></li>
                        </ol>

                    </div>
            </article>
        </section>
    )
}
export default Zee5