import React from 'react'
import './dashboard.css'
import { Link, Route } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="dashboard-wrapper middle">
        <h3>Enrichment page under development</h3>
        <p>This is where you can access subject resources and find super/extracurricular opportunities that supplement your future field.</p>
      </div>
    </>
  )
}
function Sidebar() {
  return(
    <nav className='dashboard-nav'>
      <Link reloadDocument to="/"><button>Home</button></Link>
    </nav>
  )
}
export default Dashboard