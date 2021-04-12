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
                  <NavLink
                    exact
                    to='/'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink
                    exact
                    to='/signin'
                    className='nav-link'
                    activeClassName='active'
                  >
                    Signin
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
