import Preloader from './components/global componenets/preloader/Preloader'
import Navbar from './components/global componenets/navbar/Navbar'
import './app.css'
import Announcement from './components/global componenets/announcement/Announcement'
import Landing from './components/home/landing/Landing'
import Teams from './components/home/teams/Teams'
import Timeline from './components/home/timeline/Timeline'
import Sponsors from './components/home/sponsors/Sponsors'
import Socials from './components/global componenets/socials/Socials'
// import (SectionName) from (path)

const Home = () => {
  return (
    <>
    <Preloader />
    <Announcement />
    <Navbar />
    <Landing />
    <Teams />
    <Timeline />
    <Sponsors />
    <Socials />

    <main className='main'></main>
    </>
  )
}

export default Home