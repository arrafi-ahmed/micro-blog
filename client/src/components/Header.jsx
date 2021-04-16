import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const token = localStorage.getItem('token')
  const handleSignout = (e) => {
    e.preventDefault()
    localStorage.clear()
    window.location.replace('/')
  }
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
          <div className='container'>
            <NavLink to='/'>
              <span className='navbar-brand'>MicroBlog</span>
            </NavLink>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                {(!token && (
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
                )) || (
                  <>
                    <li className='nav-item'>
                      <NavLink
                        exact
                        to='/profile'
                        className='nav-link'
                        activeClassName='active'
                      >
                        Profile
                      </NavLink>
                    </li>
                    <li className='nav-item pointer'>
                      <span onClick={handleSignout} className='nav-link'>
                        Signout
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
