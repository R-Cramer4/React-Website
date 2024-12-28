import './index.css'
import './Home.css'
import {useState, useEffect} from 'react';


function FadeImages({images}){
    const initState = {
        current: 0,
        next: 2
    }
    const [imgIndex, setImgIndex] = useState(initState);
    const [curImgIndex, setCurImgIndex] = useState(0);
    const [nextImgIndex, setNextImgIndex] = useState(2);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);

            setTimeout(() => {
                setFade(false);
                setCurImgIndex((prevIndex) => {
                    const newIndex = (prevIndex + 2) % images.length;
                    setNextImgIndex(newIndex + 2) % images.length;
                    return newIndex;
                });
            }, 2000);
            
        }, 6000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='photo-banner'>
            <div className='img-current'>
                <img src={images[curImgIndex]} alt="Before" className={fade ? 'photos fade-out' : 'photos fade-in'}/>
                <img src={images[curImgIndex + 1]} alt="After" className={fade ? 'photos fade-out' : 'photos fade-in'}/>
            </div>
            <div className='img-next'>
                <img src={images[nextImgIndex]} alt="Before" className='photos'/>
                <img src={images[nextImgIndex + 1]} alt="After" className='photos'/>
            </div>
        </div>
    )

}


export default function Home(){
    const images = [
        './src/assets/Photos/Gallery/BatteryBefore.jpg',
        './src/assets/Photos/Gallery/BatteryAfter.jpg',
        './src/assets/Photos/Gallery/GarminCenterBefore.jpeg',
        './src/assets/Photos/Gallery/GarminCenterAfter.jpeg',
        './src/assets/Photos/Gallery/GarminLeftBefore.jpg',
        './src/assets/Photos/Gallery/GarminLeftAfter.jpg',
        './src/assets/Photos/Gallery/GarminRightBefore.jpg',
        './src/assets/Photos/Gallery/GarminRightAfter.jpg',
        './src/assets/Photos/Gallery/LowerPanelBackBefore.jpg',
        './src/assets/Photos/Gallery/LowerPanelBackAfter.jpg',
        './src/assets/Photos/Gallery/UpperPanelBefore.jpg',
        './src/assets/Photos/Gallery/UpperPanelAfter.jpg',
        './src/assets/Photos/Gallery/UpperPanelFrontBefore.jpg',
        './src/assets/Photos/Gallery/UpperPanelFrontAfter.jpg',
    ]
    return(
        <main className="light-theme">

            <FadeImages images={images}/>

            <div className='slogan-banner'>
                <h2 className='slogan'>Marine systems, customized to fit your needs</h2>
            </div>
            <div className='companies'>
                <a href="https://abycinc.org/members/?id=17482131">
                    <img src="./src/assets/Photos/Brands/ABYCMasterTech.png" alt="ABYC Logo" className="home-logos"/>
                </a>
                <a href="https://web.nmea.org/Directory-Listing/Guardian-Marine-LLC-8887">
                    <img src="./src/assets/Photos/Brands/NMEA Logo.png" alt="NMEA Logo" className="home-logos"/>
                </a>
            </div>
        </main>
    )
}
