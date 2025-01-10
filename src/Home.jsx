import './index.css'
import './Home.css'
import {useState, useEffect} from 'react';


function FadeImages({images}){
    const initIndex = {
        i0: 0,
        i1: 2,
        next: 1,
    }
    const [fade, setFade] = useState(false);
    const[imgIndex, setImgIndex] = useState(initIndex);
    useEffect(() => {
        const interval = setInterval(() => {

            setFade(true);
            setTimeout(() => {
                setFade(false);
                setImgIndex((prevI) => {
                    const newI = prevI;
                    if((prevI.i0 + 2) % images.length == prevI.i1){
                        newI.i0 = (newI.i0 + 2) % images.length;
                        newI.next = 0;
                        return newI;
                    }else{
                        newI.i1 = (newI.i1 + 2) % images.length;
                        newI.next = 1;
                        return newI;
                    }
                })
            }, 2000);
        }, 6000);
        return () => clearInterval(interval);
    });

    return (
        <div className='photo-banner'>
            <div className='photo-text'>
                <h2 className='photo-text-c'>Before</h2>
                <h2 className='photo-text-c'>After</h2>
            </div>
            <div className={getCur(0, imgIndex.next)}>
                <img src={images[imgIndex.i0]} alt="Before" className={getName(0, imgIndex.next, fade)}/>
                <img src={images[imgIndex.i0 + 1]} alt="After" className={getName(0, imgIndex.next, fade)}/>
            </div>
            <div className={getCur(1, imgIndex.next)}>
                <img src={images[imgIndex.i1]} alt="Before" className={getName(1, imgIndex.next, fade)}/>
                <img src={images[imgIndex.i1 + 1]} alt="After" className={getName(1, imgIndex.next, fade)}/>
            </div>
        </div>
    )
}
function getName(ind, next, fade){
    let classes = 'photos';
    if(next == ind){
        if(!fade) classes += ' inactive';
        else classes += ' fade-in';
    }else{
        if(!fade) classes += ' active';
        else classes += ' fade-out';
    }
    return classes;
}
function getCur(ind, next){
    let classes = '';
    const w = window.innerWidth;
    if(w < 750) classes += ' p-mobile';
    else classes += ' p-computer';
    if(next == ind) classes += ' img-next';
    classes += ' img-current';
    return classes;
}

export default function Home({handleClick}){
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
    // https://www.pexels.com/photo/five-white-yacht-655794/
    return(
        <main className="light-theme">

            <div className='main-body'>
                <img src='./src/assets/Marina.jpg' className='body-background' />
                <div className='main-content'>
                    <h2 className='body-slogan'>Marine systems, designed with your needs in mind</h2>
                    <div className='right-links'>
                        <div className='link-col'>
                            <h5 className='body-label' onClick={() => handleClick('services', -1, 1, -1, -1)}>Electronics</h5>
                            <h5 className='body-label' onClick={() => handleClick('services', 1, -1, -1, -1)}>Electrical</h5>
                        </div>
                        <div className='link-col'>
                            <h5 className='body-label' onClick={() => handleClick('services', -1, -1, 1, -1)}>System Integration</h5>
                            <h5 className='body-label' onClick={() => handleClick('services', -1, -1, -1, 1)}>Solar/Energy Systems</h5>
                        </div>
                    </div>
                </div>

            </div>

            <FadeImages images={images}/>

            <div className={window.innerWidth > 750 ? 'companies-c' : 'companies-m'}>
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
