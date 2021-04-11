import React from 'react'

const Login = () => {
  return (
    <>
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 mx-auto my-5'>
              <form>
                <div className='row mb-3'>
                  <label for='inputEmail3' className='col-sm-2 col-form-label'>
                    Email
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='email'
                      className='form-control'
                      id='inputEmail3'
                    />
                  </div>
                </div>
                <div className='row mb-3'>
                  <label
                    for='inputPassword3'
                    className='col-sm-2 col-form-label'
                  >
                    Password
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='password'
                      className='form-control'
                      id='inputPassword3'
                    />
                  </div>
                </div>

                <div className='d-flex justify-content-center'>
                  <div className='d-inline-block'>
                    <span>
                      No account? <a href='#'>Signup</a>
                    </span>
                    <button type='submit' className='btn btn-primary'>
                      Signin
                    </button>
                  </div>
                  <div className='d-inline-block'>
                    <span>
                      Already registered? <a href='#'>Signin</a>
                    </span>
                    <button type='submit' className='btn btn-primary'>
                      Signup
                    </button>
                  </div>
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
