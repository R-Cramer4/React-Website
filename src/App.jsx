import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Service from './Service.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'


function App() {
    const [page, setPage] = useState('home');
    function handleClick(newPage){
        setPage(newPage)
    }
    return (
        <>
            <Header handleClick={handleClick}/>
            {page == 'home' && <Home />}
            {page == 'services' && <Service />}
            {page == 'about' && <About />}
            {page == 'contact' && <Contact />}
            <Footer />
        </>
    )
}
export default App
