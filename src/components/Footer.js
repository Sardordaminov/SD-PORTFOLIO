import React from 'react'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { FaTelegram } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
      <p>2023 | <a target='_blank' rel='noreferrer' href="https://www.instagram.com/serdar__750/">Sardorbek Daminov </a>®</p>
      <div className='social-media-footer'>
        <a target='_blank' rel='noreferrer' href="https://www.youtube.com/@SardorDaminov2210" className='socialBtn'><BsYoutube /></a>
        <a target='_blank' rel='noreferrer' href="https://www.instagram.com/serdar__750/" className='socialBtn'><BsInstagram /></a>
        <a target='_blank' rel='noreferrer' href="https://t.me/SD_750" className='socialBtn'><FaTelegram /></a>
      </div>
    </div>
  )
}

export default Footer