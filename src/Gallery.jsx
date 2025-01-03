import './index.css'
import './Gallery.css'

export default function Gallery(){
    return (
        <div>
            <div className='gall-row'>
                <div className='gall-col'>
                    <img src='./src/assets/Photos/Gallery/BatteryAfter.jpg' alt="After"/>
                    <img src='./src/assets/Photos/Gallery/GarminCenterAfter.jpeg' alt="After"/>
                    <img src='./src/assets/Photos/Gallery/SolarBoatAfter.jpg' alt="After"/>
                </div>
                <div className='gall-col'>
                    <img src='./src/assets/Photos/Gallery/GarminLeftAfter.jpg' alt="After"/>
                    <img src='./src/assets/Photos/Gallery/GarminRightAfter.jpg' alt="After"/>
                    <img src='./src/assets/Photos/Gallery/UpperPanelFrontAfter.jpg' alt="After"/>
                </div>
                <div className='gall-col'>
                    <img src='./src/assets/Photos/Gallery/LowerPanelBackAfter.jpg' alt="After"/>
                    <img src='./src/assets/Photos/Gallery/UpperPanelAfter.jpg' alt="After"/>
                </div>
            </div>
        </div>
    )
}
