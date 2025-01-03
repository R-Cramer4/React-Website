import './index.css'


function Header({handleClick}){
    return(
        <header className='light-theme'>
            <div className="phone-number">
                <a href='tel:203-214-3282'>
                    <h5>203-214-3282</h5>
                </a>
            </div>
            <div className="main-header">
                <div className="left">
                    <a onClick={() => handleClick('home')}>
                        <img src="./src/assets/Logo.png" alt="Logo" className = "logo"/>
                    </a>
                    <h4>Guardian Marine</h4>
                </div>

                <div className="top-right">
                    <div className="mobile">
                        <div className="dropdown">
                            <button className="dropbtn"></button>
                            <div className="dropdown-content">
                                <a onClick={() => handleClick('about')} className="label">About</a>
                                <a onClick={() => handleClick('contact')} className="label">Contact</a>
                                <a onClick={() => handleClick('services')} className="label">Services</a>
                            </div>
                        </div>
                    </div>
                    <div className="computer">
                        <div className="right">
                            <a onClick={() => handleClick('home')} className="label">Home</a>
                            <a onClick={() => handleClick('about')} className="label">About</a>
                            <a onClick={() => handleClick('services')} className="label">Services</a>
                            <a onClick={() => handleClick('gallery')} className="label">Gallery</a>
                            <a onClick={() => handleClick('brands')} className="label">Our Brands</a>
                            <a onClick={() => handleClick('contact')} className="label">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}


export default Header
