import React from 'react'
import "./header.css"

export default function Header
() {
  return (
    <nav className='header'>
        <div className='left-item'>
            <div className='topbar-img'></div>
            <h1>Inventory Management System</h1>

        </div>

        <div className='right-item'>Home</div>

    </nav>
  )
}
