import Navbar from './components/navbar/Navbar'
import './app.css'
import Announcement from './components/announcement/Announcement'
import Landing from './components/home/landing/Landing'
// import (SectionName) from (path)

const Home = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Landing />

    <main className='main'></main>
    </>
  )
}

export default Home