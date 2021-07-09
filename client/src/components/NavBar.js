import React from 'react'
import { NavLink } from 'react-router-dom'
import PokeBall from '../Styles/PokeBall.png'

const NavBar = () => {
  return (
    <div>
      <NavLink to={'/sellers'}>
        <img src={PokeBall} />
      </NavLink>
    </div>
  )
}

export default NavBar
