import React from 'react'

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='about-img'><img alt='imm-coder' src='./img/coder.png' /></div>
            <div className='about-textbox'>
                <h1 className='textbox-title'>Men Haqimda</h1>
                <p>Men Front-End veb-dasturchisiman. IT sohasidagi 2 yillik tajribam menga veb-ishlab chiqish va murakkab yechimlarni yaratish uchun mustahkam poydevor berdi. Men kodlash va muammolarni kod orqali hal qilishni yaxshi ko'raman va boshqa ajoyib dasturchilar bilan birga ishlashdan va ko'p narsalarni o'rganishdan xursandman!</p>
                <button className='to-projects btn'>Resume</button>
            </div>
        </div>
    )
}

export default AboutMe