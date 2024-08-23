import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <h1>Nothing Found :(</h1>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default Error