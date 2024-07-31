import React, { useEffect, useState } from 'react'
import { FaAngleDoubleUp } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'

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
    return (
        <>
            <div onClick={toTop} className={`to-top ${totop && "active"}`}><FaAngleDoubleUp /></div>
            <nav className={`nav ${nav && "active"} ${open && "full"}`}>
                <a href='Header.js'><img className='logo-img' src='./img/logo.png' alt='logo' /></a>
                <ul>
                    <li>Asosiy</li>
                    <li>Men Haqimda</li>
                    <Link to='/projects'><li>Loyihalar</li></Link>
                </ul>
                <RxHamburgerMenu className='open' onClick={() => { setOpen(!open) }} />
            </nav>
        </>
    )
}

export default Navbar