import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import {HomeObjOne, HomeObjTwo, HomeObjThree} from '../Components/InfoSection/Data'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import Services from '../Components/Services'
import Footer from '../Components/Footer'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/> 
           <HeroSection/>
           <InfoSection {...HomeObjOne}/>
           <InfoSection {...HomeObjTwo}/>
           <Services/>
           <InfoSection {...HomeObjThree}/>
           <Footer/>
        </>
    )
}

export default Home
