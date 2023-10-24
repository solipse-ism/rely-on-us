import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home, About, Learning, Event, Curricular, Error404 } from './pages'
import { Navbar, Footer, Button } from './components'
import './assets/global.css'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/learning" element={<Learning />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/event" element={<Event />}></Route>
        <Route path="/curricular" element={<Curricular />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      {location.pathname==='/about' ? "" : <Footer />}
    </Router>
  </React.StrictMode>,
)
