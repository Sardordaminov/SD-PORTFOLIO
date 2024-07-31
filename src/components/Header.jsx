import React from 'react'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { FaTelegram } from "react-icons/fa"

const Header = () => {
    return (
        <header>
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