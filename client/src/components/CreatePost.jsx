import React from 'react'

const CreatePost = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 createPost my-5 p-3 border rounded bg-light'>
            <form>
              <label htmlFor='createPost' className='form-label'>
                Create Post
              </label>
              <textarea
                className='form-control'
                id='createPost'
                rows='3'
              ></textarea>
              <button type='submit' className='btn btn-primary float-end mt-2'>
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatePost
