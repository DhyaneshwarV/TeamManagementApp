import React from 'react'
import {Link } from 'react-router-dom'
import Css from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={Css.container}>
      <h3>Teams</h3>
      <ul className={Css.listwrapper}>
        <li className={Css.element}><Link className={Css.Link} to="/">Home</Link></li>
        <li className={Css.element}><Link className={Css.Link} to="/GroupedTeamMembers">Team Members</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
