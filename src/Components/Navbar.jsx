import style from "./navbar.module.css"
import picture from "./logo2.jpg"
import picture1 from "./logo3.png"
const Navbar=()=>{
    return(
        <section id={style.nav}>
            <article>
                <div className={style.logo}>
                    <img src={picture} height="100%" width="100%"/>
                </div>
                <div className={style.menu}>
                    <ol>
                        <li><a href="">What we do</a></li>
                        <li><a href="">Who we are</a></li>
                        <li><a href="">Insights</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">Investors</a></li>
                    </ol>
                </div>
                <div className={style.contact}>
                    <ol>
                       <li><a href="">CONTACT US</a></li>
                       <li><a href="">TCS WORLDWIDE</a></li>
                       <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
                       <li><a href=""><img src={picture1}/></a></li>
                    </ol>
                </div>
            </article>
        </section>
    )
}
export default Navbar