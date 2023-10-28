import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Community, Event, Inspiring, Dashboard, Error404 } from './pages'
import { Navbar, Footer, Button } from './components'
import './assets/global.css'
import './assets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<Router>
  {location.pathname !== "/dashboard" ? <Navbar /> : ""}
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/community" element={<Community />}></Route>
    <Route path="/event">
      <Route index element={<Event />}></Route>
      <Route path="inspiring-session" element={<Inspiring />}></Route>
    </Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="*" element={<Error404 />}></Route>
  </Routes>
</Router>
</React.StrictMode>,
)
