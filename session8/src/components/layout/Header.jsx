import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <h1>Header Component</h1>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li> | 
        <li><NavLink to={'/about'}>About</NavLink></li> | 
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/products'}>Products</NavLink></li>
      </ul>
    </div>
  )
}
