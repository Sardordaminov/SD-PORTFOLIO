import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const Topprojects = (props) => {
  return (
    <div className='top-projects'>
        <h1 className='Topprojects-title'>Top Loyihalar</h1>
        <div className='carts'>
          {props.topprojects.map((el) => (
            <div className='cart' key={el.id}>
              <img src={'./img/' + el.img} alt='cart-img' />
              <h3>{el.title}</h3>
              <a rel='noreferrer' href={el.project} target='_blank'>Tomosha qilish <HiOutlineArrowNarrowRight  className='icon'/></a>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Topprojects