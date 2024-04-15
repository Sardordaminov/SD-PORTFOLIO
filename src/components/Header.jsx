import React, { useEffect, useState } from 'react'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { FaTelegram, FaAngleDoubleUp } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"

const Header = (props) => {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(false)
    const [totop, setTotop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1) {
                setNav(true);
                setTotop(true)
            } else {
                setNav(false);
                setTotop(false)
            }
        });
    }, []);
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <header>
            <div onClick={toTop} className={`to-top ${totop && "active"}`}><FaAngleDoubleUp /></div>
            <nav className={`nav ${nav && "active"} ${open && "full"}`}>
                <a href='Header.js'><img className='logo-img' src='./img/logo.png' alt='logo' /></a>
                <ul>
                    <li>Asosiy</li>
                    <li>Men Haqimda</li>
                    <li>Loyihalar</li>
                </ul>
                <RxHamburgerMenu className='open' onClick={() => { setOpen(!open) }} />
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
                        <a target='_blank' rel='noreferrer' href="https://t.me/Serdar_750" className='telegram icon'><FaTelegram /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header