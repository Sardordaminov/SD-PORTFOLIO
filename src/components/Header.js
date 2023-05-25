import React, { useEffect, useState } from 'react'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { FaTelegram } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"

const Header = (props) => {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1) {
                setNav(true);
            } else {
                setNav(false);
            }
        });
    }, []);

    const asosiy = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }

    return (
        <header>
            <nav className={`nav ${nav && "active"} ${open && "full"}`}>
                <img className='logo-img' src='./img/logo.png' alt='logo' />
                <ul>
                    <li onClick={asosiy}>Asosiy</li>
                    <li>Men Haqimda</li>
                    <li>Loyihalar</li>
                </ul>
                <RxHamburgerMenu className='open' onClick={() => { setOpen(!open) }}/>
            </nav>
            <div className='header-main'>
                <div className='main-img-item'>
                    <h1>Salom! Men Daminov Sardorbekman</h1>
                    <p>16 y.o, Front-End Web Developer at Sitelabs<br /> from Uzbekistan</p>
                    <a href='/img/resume.pdf' className='resume-button btn'>Resume</a>
                </div>
                <div className='main-img'>
                    <img src='./img/coder.png' alt='coder-png' />
                    <div className='main-img-social-buttons'>
                        <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@SardorDaminov2210" className='youtube icon'><BsYoutube /></a>
                        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/serdar__750/" className='instagram icon'><BsInstagram /></a>
                        <a target='_blank' rel='noreferrer' href="https://t.me/SD_750" className='telegram icon'><FaTelegram /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header