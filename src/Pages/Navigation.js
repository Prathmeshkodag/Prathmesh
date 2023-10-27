import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
      <Link to='/all'>All</Link>
      <Link to='/car'>Car</Link>
      <Link to='/bike'>Bike</Link>
      <Link to='/helath'>Helatha</Link>
      <Link to='/travel'>Travel</Link>
    </div>
  )
}
