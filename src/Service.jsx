import { useState } from 'react';
import './index.css'
import './Service.css'


const serviceText = [
    'With extensive field experience and training, the electrical systems on board is our specialty. Services from basic wiring to complete system upgrades is our brand. We at Guardian Marine follow electrical standards based on the renowned American Boat and Yacht Counsel(ABYC)',
    'Lorem Ipsum',
    'asdfs',
    'ayusdfuyogasfduyoidsabii'
]
const serviceLabel = [
    'Electrical',
    'Electronics',
    'System Integration',
    'Solar/Energy Systems'
]

function Dropdown({show, clickE, text}){
    return (
        <div className='service-p'>
            {show[text] != -1 && <h3 className='service-w-content' onClick={() => {clickE(text);}}>{serviceLabel[text]}</h3>}
            {show[text] == -1 && <h3 className='service-wo-content' onClick={() => {clickE(text);}}>{serviceLabel[text]}</h3>}
            {show[text] != -1 && <DropContent text={text} />}
        </div>
    )
}
function DropContent({text}){
    return (
        <div className='service-drop'>
            <p className='service-text'>{serviceText[text]}</p>
            <img src='./src/assets/Photos/Before1.jpeg' alt="Before" className="photos active"/>
        </div>
    )
}


export default function Service(){
    let initState = [-1, -1, -1, -1]
    const [show, setShow] = useState(initState);
    function clickE(index){
        const nextState = show.map((c, i) => {
            if(i === index){
                if(c == -1){
                    return i;
                }
                else{
                    return -1;
                }
            }else{
                return c;
            }
        });
        setShow(nextState);
    }
    return (
        <div className = "light-theme">
            <div className='services-holder'>
                <Dropdown show={show} clickE={clickE} text={0}/>
                <Dropdown show={show} clickE={clickE} text={1}/>
                <Dropdown show={show} clickE={clickE} text={2}/>
                <Dropdown show={show} clickE={clickE} text={3}/>
            </div>
            <div className='spacer'/>
            <div className='spacer'/>
            <div className='spacer'/>
            <div className='spacer'/>
        </div>
    )
}
