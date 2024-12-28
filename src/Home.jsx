import './index.css'
import './Home.css'
import {useState, useEffect} from 'react';


function FadeImages({images}){
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImgIndex(imgIndex => (imgIndex + 2) % images.length);
        }, 5000)
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className='photo-banner'>
            <img src={images[imgIndex]} alt="Before" className="photos active"/>
            <img src={images[imgIndex + 1]} alt="After" className="photos active"/>
        </div>
    )

}


export default function Home(){
    const images = [
        './src/assets/Photos/Before1.jpeg',
        './src/assets/Photos/After.jpeg',
        './src/assets/Photos/After1.jpeg',
        './src/assets/Photos/After2.jpeg',
    ]
    return(
        <main className="light-theme">

            <FadeImages images={images}/>

            <div className='slogan-banner'>
                <h2 className='slogan'>Marine systems, customized to fit your needs</h2>
            </div>
            <div className='companies'>
                <a href="https://abycinc.org/members/?id=17482131">
                    <img src="./src/assets/ABYCMasterTech.png" alt="ABYC Logo" className="home-logos"/>
                </a>
                <a href="https://web.nmea.org/Directory-Listing/Guardian-Marine-LLC-8887">
                    <img src="./src/assets/Photos/NMEA Logo.png" alt="NMEA Logo" className="home-logos"/>
                </a>

            </div>

        </main>
    )
}
