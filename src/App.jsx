import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Service from './Service.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Gallery from './Gallery.jsx'
import Brands from './Brands.jsx'


function App() {
    const [page, setPage] = useState('home');
    let initState = [-1, -1, -1, -1];
    const [show, setShow] = useState(initState);
    function handleClick(newPage, serva = -1, servb = -1, servc = -1, servd = -1){
        window.scrollTo(0, 0);
        setPage(newPage);
        const newState = [serva, servb, servc, servd];
        setShow(newState);
    }
    return (
        <>
            <Header handleClick={handleClick} page={page}/>
            {page == 'home' && <Home handleClick={handleClick}/>}
            {page == 'services' && <Service show={show} setShow={setShow} />}
            {page == 'about' && <About />}
            {page == 'contact' && <Contact handleClick={handleClick}/>}
            {page == 'gallery' && <Gallery />}
            {page == 'brands' && <Brands />}
            <Footer handleClick={handleClick}/>
        </>
    )
}
export default App
