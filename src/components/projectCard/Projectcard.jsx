import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Projectcard = (props) => {
    const { item } = props;
    console.log(item.id);

    return (
        <div className='cart' key={item.id}>
            <img src={"./img/" + item.img} alt='img' />
            <h3>{item.title}</h3>
            <a href={item.link}>Tomosha qilish <HiOutlineArrowNarrowRight className='icon' /></a>
        </div>
    )
}

export default Projectcard
