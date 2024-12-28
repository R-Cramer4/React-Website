import './index.css'
import './Gallery.css'

export default function Gallery(){
    return (
        <div>
            <div className='gall-row'>
                <div className='gall-col'>
                    <img src='./src/assets/Photos/Gallery/BatteryAfter.jpg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/GarminCenterAfter.jpeg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/GarminCenterBackAfter.jpeg' alt="after"/>
                </div>
                <div className='gall-col'>
                    <img src='./src/assets/Photos/Gallery/LowerPanelBackAfter.jpg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/LowPanelAfter.jpg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/SolarBoatAfter.jpg' alt="after"/>
                </div>
                <div className='gall-col'>
                    <img src='./src/assets/Photos/Gallery/UpperPanelAfter.jpg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/UpperPanelFrontAfter.jpg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/GarminLeftAfter.jpg' alt="after"/>
                    <img src='./src/assets/Photos/Gallery/GarminRightAfter.jpg' alt="after"/>
                </div>
            </div>
            <div className='spacer'/>
        </div>
    )
}
