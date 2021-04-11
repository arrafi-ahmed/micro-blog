import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='container'>
            <NavLink to='/'>
              <span className='navbar-brand'>MicroBlog</span>
            </NavLink>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink to='/' activeclassNameName='active'>
                    <span className='nav-link'>Home</span>
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to='/signin' activeclassNameName='active'>
                    <span className='nav-link'>Signin</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
