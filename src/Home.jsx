import './index.css'
import './Home.css'

export default function Home(){
    return(
        <main className="light-theme">

            <h3>Website Under Construction</h3>

            <div className="photo-container">
                <div className="before">
                    <h2>Before</h2>
                    <div className="pics">
                        <img src="./src/assets/Photos/Before1.jpeg" alt="Before" className="photos"/>
                    </div>
                </div>
                <div className="after">
                    <h2>After</h2>
                    <div className="pics">
                        <img src="./src/assets/Photos/After1.jpeg" alt="Before" className="photos"/>
                        <img src="./src/assets/Photos/Before2.jpeg" alt="After" className="photos"/>
                        <img src="./src/assets/Photos/After2.jpeg" alt="After" className="photos"/>
                    </div>
                </div>
            </div>
            <div className="spacer"/>
        </main>
    )
}
