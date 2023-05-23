import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"



const Projects = (props) => {
  return (
    <div className='projects'>
        <h1 className='projects-title'>Loyihalar</h1>
        <div className='carts'>
            {props.projects.map(el => (
                <div className='cart' key={el.id}>
                    <img src={"./img/" + el.img} alt='img'/>
                    <h3>{el.title}</h3>
                    <a href={el.link}>Tomosha qilish <HiOutlineArrowNarrowRight  className='icon'/></a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects