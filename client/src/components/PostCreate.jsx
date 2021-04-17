import React from 'react'
import Button from '../components/Button'

const CreatePost = React.forwardRef(({ handlePost }, ref) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 createPost mb-5 p-3 border rounded bg-light'>
            <form>
              <label htmlFor='createPost' className='form-label'>
                <h6>What's on your mind?</h6>
              </label>
              <textarea
                ref={ref}
                className='form-control'
                id='createPost'
                rows='3'
              ></textarea>
              <Button
                event={handlePost}
                btnText='Post'
                customClass='btn-primary float-end mt-2 text-white'
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
})

export default CreatePost
