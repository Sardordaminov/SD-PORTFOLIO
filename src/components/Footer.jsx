import React from 'react'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { FaGithub, FaTelegram } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"

const Footer = () => {
  return (
    <div className='footer'>
      <p>2023 | <a target='_blank' rel='noreferrer' href="https://www.instagram.com/serdar750_/">Sardorbek Daminov </a>®</p>
      <div className='social-media-footer'>
        <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@SardorDaminov2210" className='socialBtn'><BsYoutube /></a>
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/serdar750_" className='socialBtn'><BsInstagram /></a>
        <a target='_blank' rel='noreferrer' href="https://t.me/serdardaminov" className='socialBtn'><FaTelegram /></a>
        <a target='_blank' rel='noreferrer' href="https://github.com/Sardordaminov" className='socialBtn'><FaGithub /></a>
        <a target='_blank' rel='noreferrer' href="https://app.netlify.com/teams/sardorbe221007" className='socialBtn'><SiNetlify /></a>
      </div>
    </div>
  )
}

export default Footer