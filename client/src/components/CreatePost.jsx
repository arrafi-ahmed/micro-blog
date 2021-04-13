import React from 'react'

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
              <button
                onClick={handlePost}
                type='submit'
                className='btn btn-primary float-end mt-2'
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
})

export default CreatePost
