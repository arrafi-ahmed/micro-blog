import React from 'react'
import Button from '../components/Button'

const CommentCreate = React.forwardRef(({ handleComment }, ref) => {
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
            <Button
              event={handleComment}
              btnText='Comment'
              customClass='btn-sm'
            />
          </div>
        </form>
      </div>
    </>
  )
})

export default CommentCreate
