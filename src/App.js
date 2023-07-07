import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Topprojects from "./components/Topprojects";
import Projects from './components/Projects'
import Footer from "./components/Footer";


function App() {
  const topprojects = [
    {
      id: 1,
      title: 'Zamondosh Print',
      img: 'zamondosh.png',
      project: "https://zamondosh-print.vercel.app/"
    },
    {
      id: 2,
      title: 'VaccineQu',
      img: 'vaccinequ.png',
      project: "https://vaccine-qu.vercel.app/"
    },
    {
      id: 3,
      title: 'React Sneakers',
      img: 'reactsneakers.png',
      project: "https://shopping-sd.vercel.app/"
    }
  ]
  const projects = [
    {
      id: 1,
      title: 'Api Project with react',
      img: 'project.png',
      link: "https://api-project-amber.vercel.app/"
    },
    {
      id: 2,
      title: 'Fortnite website',
      img: 'project1.png',
      link: "https://sardor-fortnite.netlify.app/"
    },
    {
      id: 3,
      title: 'CribMd',
      img: 'project2.png',
      link: "https://sardor-cribmd.netlify.app/"
    },
    {
      id: 4,
      title: 'UiCookies',
      img: 'project3.png',
      link: "https://sardor-uicookies.netlify.app/"
    },
    {
      id: 5,
      title: 'Counting Animation',
      img: 'counting.png',
      link: "https://counting-animation.vercel.app/"
    },
    {
      id: 6,
      title: 'React Sneakers',
      img: 'reactsneakers.png',
      link: "https://shopping-sd.vercel.app/"
    }
  ]
  return (
    <div className="wrapper">
      <Header />
      <Topprojects topprojects={topprojects} />
      <AboutMe />
      <Projects projects={projects} />
      <Footer /> 
    </div>
  );
}

export default App;
