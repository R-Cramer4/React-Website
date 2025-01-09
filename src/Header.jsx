import { useState } from 'react';
import './index.css'
import './Header.css'


function DropButton({changeSite}){
    const [active, setActive] = useState(false);

    function handleClick(name){
        setActive((act) => {return !act;});
        if(name == '') return; 
        changeSite(name);
    }
    return (
        <div className="dropdown">
            <button className="dropbtn" onClick={() => handleClick('')}/>
            <div className={active ? "dropdown-content dc-active" : "dropdown-content"}>
                <a onClick={() => handleClick('home')} className="drop-label">Home</a>
                <a onClick={() => handleClick('about')} className="drop-label">About</a>
                <a onClick={() => handleClick('services')} className="drop-label">Services</a>
                <a onClick={() => handleClick('gallery')} className="drop-label">Gallery</a>
                <a onClick={() => handleClick('brands')} className="drop-label">Our Brands</a>
                <a onClick={() => handleClick('contact')} className="drop-label">Contact</a>
            </div>
        </div>
    );
}
function NewHeader({handleClick}){
    const [top, setTop] = useState(true);
    window.onscroll = function() {
        if(window.scrollY == 0) setTop(true);
        else setTop(false);
    }
    return(
        <header className='newH'>
            <div className='site-links'>
                <div className='links'>
                    <a onClick={() => handleClick('home')} className="label">Home</a>
                    <a onClick={() => handleClick('about')} className="label">About</a>
                    <a onClick={() => handleClick('services')} className="label">Services</a>
                    <a onClick={() => handleClick('gallery')} className="label">Gallery</a>
                    <a onClick={() => handleClick('brands')} className="label">Our Brands</a>
                    <a onClick={() => handleClick('contact')} className="label">Contact</a>
                </div>
                <a href='tel:203-214-3282' className='label'>203-214-3282</a>
            </div>
            <div className='header-content'>
                <img src="./src/assets/Logo.png" alt="Logo" className = "head-logo"/>
                <div className='name-and-desc'>
                    <h1 className='company'>Guardian Marine</h1>
                    <h4 className='company-desc'>Custom Marine Systems</h4>
                </div>
            </div>

        </header>
    )
}

function Header({handleClick}){
    return (
        <>
            <NewHeader handleClick={handleClick}/>
        </>
    )
    /*
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
                        <DropButton changeSite={handleClick} />

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
    */
}


export default Header
