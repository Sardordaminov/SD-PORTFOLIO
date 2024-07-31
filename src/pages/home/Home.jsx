import React from 'react'
import Topprojects from '../../components/Topprojects'
import AboutMe from '../../components/AboutMe'
import Projects from '../../components/Projects'
import { projects, topprojects } from '../../data/data'
import Header from '../../components/Header'

const Home = () => {
    return (
        <>
            <Header />
            <Topprojects topprojects={topprojects} />
            <AboutMe />
            <Projects projects={projects} />
        </>
    )
}

export default Home