import './index.css'
import './Footer.css'


function NewFoot({handleClick}){
    return(
        <footer className='new-foot'>
            <div className='ft-img'>
                <img src='./src/assets/Logo.png' className='ft-logo'/>
            </div>
            <div className='ft-contact'>
                <h2 className='footer-h'>Contact Info</h2>
                <p className='footer-li'>Chris Johnson</p>
                <p className='footer-li'><a href="mailto:Service@guardianmarinect.com" className='footer-a'>Service@guardianmarinect.com</a></p>
                <p className='footer-li'><a href="tel:203-214-3282" className='footer-a'>203-214-3282</a></p>
            </div>
            <div className='ft-site'>
                <h2 className='footer-h'>More</h2>
                <p className='footer-li' onClick={() => handleClick('home')}>Home</p>
                <p className='footer-li' onClick={() => handleClick('services')}>Services</p>
                <p className='footer-li' onClick={() => handleClick('gallery')}>Gallery</p>
                <p className='footer-li' onClick={() => handleClick('brands')}>Brands</p>
                <p className='footer-li' onClick={() => handleClick('contact')}>Contact</p>
                <p className='footer-li' onClick={() => handleClick('about')}>About</p>
            </div>
        </footer>
    )
}

export default function Footer({handleClick}){
    return <NewFoot handleClick={handleClick}/>
    /*
    return(
        <footer>
            <div className="container">
                <div className="ft-left">
                    <a href="https://abycinc.org/members/?id=17482131">
                        <img src="./src/assets/Photos/Brands/ABYC logo.png" alt="ABYC Logo" className="logos"/>
                    </a>
                    <a href="https://web.nmea.org/Directory-Listing/Guardian-Marine-LLC-8887">
                        <img src="./src/assets/Photos/Brands/NMEA Logo.png" alt="NMEA Logo" className="logos"/>
                    </a>
                </div>
                <div className="flex-item">
                    <ul>
                        <h2>Contact Info</h2>
                        <li>Chris Johnson</li>
                        <li><a href="mailto:Service@guardianmarinect.com">Service@guardianmarinect.com</a></li>
                        <li><a href="tel:203-214-3282">203-214-3282</a></li>
                    </ul>
                </div>

                <div className="ft-right">
                    <a href="https://www.sleipnergroup.com/">
                        <img src="./src/assets/Photos/Brands/Sleipner Logo.png" alt="Sleipner Logo" className="logos"/>
                    </a>
                </div>
            </div>

        </footer>
    )
    */
}
