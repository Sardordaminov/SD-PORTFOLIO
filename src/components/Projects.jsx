import React from 'react'
import Projectcard from './projectCard/ProjectCard'
const Projects = (props) => {
  return (
    <div className='projects'>
      <h1 className='projects-title'>Loyihalar</h1>
      <div className='carts'>
        {props.projects.map(el => (
          <Projectcard key={el.id} item={el} />
        ))}
      </div>
    </div>
  )
}

export default Projects