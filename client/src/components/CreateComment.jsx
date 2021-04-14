import React from 'react'

const CreateComment = React.forwardRef(({ handleComment }, ref) => {
  return (
    <>
      <div className='createComment mb-3'>
        <form>
          <div className='input-group'>
            <input
              ref={ref}
              type='text'
              className='form-control'
              placeholder='Write a comment'
            />
            <button
              onClick={handleComment}
              className='btn btn-outline-primary'
              type='sumbit'
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
})

export default CreateComment
