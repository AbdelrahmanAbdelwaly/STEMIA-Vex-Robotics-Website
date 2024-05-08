import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Preloader from './components/global componenets/preloader/Preloader'
import Navbar from './components/global componenets/navbar/Navbar'
import Announcement from './components/global componenets/announcement/Announcement'
import Socials from './components/global componenets/socials/Socials'
import Home from './pages/Home'
import About from './pages/About'
import Apparel from './pages/Apparel'
import Blog from './pages/Blog'
import Connect from './pages/Connect'
import Donate from './pages/Donate'
import Media from './pages/Media'
import Sponsors from './pages/Sponsors'
import Teams from './pages/Teams'
// import (SectionName) from (path)

const App = () => {
  return (
    <>
    <Router>
      <Preloader />
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/media" element={<Media />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Socials />
    </Router>
    </>
  );
}

export default App