import React, { useEffect, useState } from 'react'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { FaTelegram } from "react-icons/fa"

const Header = () => {
    let [age, setAge] = useState(0)
    useEffect(() => {
        let myBirth = 2007
        let date = new Date().getFullYear()
        setAge(date - myBirth)
    }, [])
    return (
        <header>
            <div className='header-main'>
                <div className='main-img-item'>
                    <h1>Hello! My name is <br /> Daminov Sardor</h1>
                    <p>{age} y.o, Front-End Web Developer from Uzbekistan</p>
                    <a href='/img/resume.pdf' className='resume-button btn'>Resume</a>
                </div>
                <div className='main-img'>
                    <img src='./img/coder.png' alt='coder-png' />
                    <div className='main-img-social-buttons'>
                        <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@SardorDaminov2210" className='youtube icon'><BsYoutube /></a>
                        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/serdar750_/" className='instagram icon'><BsInstagram /></a>
                        <a target='_blank' rel='noreferrer' href="https://t.me/serdardaminov" className='telegram icon'><FaTelegram /></a>
                    </div>
                    <div className="box"></div>
                </div>
            </div>
        </header>
    )
}

export default Header