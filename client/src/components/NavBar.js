import React from 'react'
import { NavLink } from 'react-router-dom'
import PokeBall from '../Styles/PokeBall.png'
import Trainer from '../Styles/Trainer.png'

const NavBar = () => {
  return (
    <div>
      <div
        style={{ width: '100%', height: '1vh', backgroundColor: '#ffcb05' }}
      ></div>
      <div
        style={{
          height: '13vh',
          backgroundColor: '#F0F0F0',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <NavLink
          to={'/'}
          style={{ textDecoration: 'none', color: 'black', marginRight: '1vw' }}
        >
          <img src={PokeBall} style={{ height: '7vw' }} />
        </NavLink>
        <NavLink
          to={'/sellers'}
          style={{ textDecoration: 'none', color: 'black', marginRight: '2vw' }}
        >
          <div
            style={{
              height: '12vh',
              display: 'flex',
              alignItems: 'Center',
              backgroundColor: '#CC0000',
              borderRadius: '1000px'
            }}
          >
            <img
              src={Trainer}
              style={{ height: '80%', marginLeft: '25px', marginRight: '25px' }}
            />
          </div>
        </NavLink>
        <h1 style={{ alignSelf: 'center' }}>Rare Pokedex</h1>
      </div>
      <div
        style={{ width: '100%', height: '1vh', backgroundColor: '#ffcb05' }}
      ></div>
    </div>
  )
}

export default NavBar
