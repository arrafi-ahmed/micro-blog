import React, { useState } from 'react'

const Login = () => {
  const [showSignin, setShowSignin] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSignin(!showSignin)
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
                    <input type='text' className='form-control' id='username' />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label htmlFor='password' className='col-sm-2 col-form-label'>
                    Password
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                    />
                  </div>
                </div>

                <div className='d-flex justify-content-center'>
                  {showSignin && (
                    <div className='d-inline-block text-center'>
                      <button type='submit' className='btn btn-primary'>
                        Signin
                      </button>
                      <span className='d-block mt-2'>
                        No account?{' '}
                        <a href='# ' onClick={handleSubmit}>
                          Signup
                        </a>
                      </span>
                    </div>
                  )}
                  {!showSignin && (
                    <div className='d-inline-block text-center'>
                      <button type='submit' className='btn btn-primary'>
                        Signup
                      </button>
                      <span className='d-block mt-2'>
                        Already registered?{' '}
                        <a href='# ' onClick={handleSubmit}>
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
