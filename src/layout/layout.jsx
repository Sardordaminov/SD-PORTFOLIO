import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main className='wrapper'>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout