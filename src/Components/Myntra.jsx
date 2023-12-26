import style from "./myntra.css"
import picture from "./myntra.png"
const Myntra = () =>{
    return(
        <section id={style.nav}>
            <article>
            <div className={StyleSheet.logo}>
                <img src={picture} height="100%" width="100%" />
                </div>
                <div className={style.menu}>
                    <ol>
                        <li><a href="">MEN</a></li>
                        <li><a href="">WOMEN</a></li>
                        <li><a href="">KIDS</a></li>
                        <li><a href="">HOME&LIVING</a></li>
                        <li><a href="">BEAUTY</a></li>
                        <li><a href="">STUDIO <sup style={{color:"red"}}>NEW</sup></a></li>
                    </ol>
                    </div>
                    <div className={style.search}>
                        <ol>
                            <li><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="search for products,brands and more"/></li>
                        </ol>
                        <div className={style.detail}>
                            <ol className={style.pro}>
                                <li><a href=""><i class="fa-regular fa-user"></i></a></li>
                                <li>Profile</li>
                                </ol>
                                <ol className={style.wish}>
                                    <li><a href=""><i class="fa-solid fa-heart"></i></a></li>
                                    <li>Wishlist</li>
                                    </ol>
                                    <ul>
                                        <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
                                        <li>Bag</li>
                                    </ul>


                        </div>

                    </div>
            </article>
        </section>
    )
}
export default Myntra