import React from 'react'

const CreateComment = () => {
  return (
    <>
      <div className='createComment mb-3'>
        <form>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Write a comment'
            />
            <button className='btn btn-outline-primary' type='sumbit'>
              Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateComment
