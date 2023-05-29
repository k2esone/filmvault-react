
import './Header.css'
const HeaderComp = ()=>{


    return(
        <section className='header'>
            <div className='hero_img'>
                <div className="hero_shadow"></div>
                <h1>You want to watch a movie</h1>
                <h3>Check where it is available</h3>
                <div className="input_conteiner">
                    <div className="input_box">
                        <input className="email_input" type="text" required placeholder="Find a movie "/>
                        <button className='header_btn'>Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export  default HeaderComp;