import React, { useState, useRef, useContext } from 'react'
import UserApi from '../api/user'
import { GlobalContext } from '../context/globalContext'

const Login = () => {
  const global = useContext(GlobalContext)
  const [showSignin, setShowSignin] = useState(true)
  const username = useRef(null)
  const password = useRef(null)
  const toggleButton = (e) => {
    e.preventDefault()
    setShowSignin(!showSignin)
  }
  const handleSignin = () => {}
  const handleSignup = (e) => {
    e.preventDefault()
    const signupData = {
      username: username.current.value,
      password: password.current.value,
    }
    UserApi.isUserExist(signupData.username)
      .then((res) => {
        if (!res.data.exist) {
          UserApi.createUser(signupData)
        } else {
          throw Error(res.data.message)
        }
      })
      .then((res) => {
        global.setAlert({ type: 'success', message: res.data.message })
        window.location.replace('/')
      })
      .catch((err) => {
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      })
  }
  return (
    <>
      <main className='d-flex justify-content-center align-items-center h-100'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mx-auto my-5'>
              <form className='bg-light p-5'>
                <div className='row mb-3'>
                  <label htmlFor='username' className='col-sm-2 col-form-label'>
                    Username
                  </label>
                  <div className='col-sm-10'>
                    <input
                      ref={username}
                      type='text'
                      className='form-control'
                      id='username'
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label htmlFor='password' className='col-sm-2 col-form-label'>
                    Password
                  </label>
                  <div className='col-sm-10'>
                    <input
                      ref={password}
                      type='password'
                      className='form-control'
                      id='password'
                    />
                  </div>
                </div>

                <div className='d-flex justify-content-center'>
                  {(showSignin && (
                    <div className='d-inline-block text-center'>
                      <button
                        onClick={handleSignin}
                        type='submit'
                        className='btn btn-primary'
                      >
                        Signin
                      </button>
                      <span className='d-block mt-2'>
                        No account?{' '}
                        <a href='# ' onClick={toggleButton}>
                          Signup
                        </a>
                      </span>
                    </div>
                  )) || (
                    <div className='d-inline-block text-center'>
                      <button
                        onClick={handleSignup}
                        type='submit'
                        className='btn btn-primary'
                      >
                        Signup
                      </button>
                      <span className='d-block mt-2'>
                        Already registered?{' '}
                        <a href='# ' onClick={toggleButton}>
                          Signin
                        </a>
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Login
