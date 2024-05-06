import Preloader from './components/preloader/Preloader'
import Navbar from './components/navbar/Navbar'
import './app.css'
import Announcement from './components/announcement/Announcement'
import Landing from './components/home/landing/Landing'
import Teams from './components/home/teams/Teams'
import Timeline from './components/home/timeline/Timeline'
import Sponsors from './components/home/sponsors/Sponsors'
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

    <main className='main'></main>
    </>
  )
}

export default Home