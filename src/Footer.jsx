import './index.css'
import './Footer.css'


function NewFoot(){
    return(
        <footer className='new-foot'>
            <div className='ft-img'>
                <img src='./src/assets/Logo.png' className='ft-logo'/>
            </div>
            <div className='ft-contact'>
                <ul>
                    <h2>Contact Info</h2>
                    <li>Chris Johnson</li>
                    <li><a href="mailto:Service@guardianmarinect.com">Service@guardianmarinect.com</a></li>
                    <li><a href="tel:203-214-3282">203-214-3282</a></li>
                </ul>
            </div>
            <div className='ft-site'>
                <ul>
                    <h2>More</h2>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Brands</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
        </footer>
    )
}

export default function Footer(){
    return <NewFoot />
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
