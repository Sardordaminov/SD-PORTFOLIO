import React, { useEffect, useState } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './../ThemeBtn/ThemeSwitcher';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(false)
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
    const [totop, setTotop] = useState(false)
    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const toAbout = (e) => {
        document.documentElement.scrollTop = 1400;
    }
    const toProjects = (e) => {
        document.documentElement.scrollTop = 1900;
    }
    return (
        <>
            <div onClick={toTop} className={`to-top ${totop && "active"}`}><FaAngleDoubleUp /></div>
            <nav className={`nav ${nav && "active"} ${open && "full"}`}>
                <Link to='/'><a href=''><img className='logo-img' src='./img/logo.png' alt='logo' /></a></Link>
                <ul>
                    <Link to='/'><li>Asosiy</li></Link>
                    <li onClick={toAbout}>Men Haqimda</li>
                    <li onClick={toProjects}>Loyihalar</li>
                    <ThemeSwitcher />
                </ul>
                <RxHamburgerMenu className='open' onClick={() => { setOpen(!open) }} />
            </nav>
        </>
    )
}

export default Navbar