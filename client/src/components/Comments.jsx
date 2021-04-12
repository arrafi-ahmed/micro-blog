import React, { useState, useEffect } from 'react'
import CreateComment from './CreateComment'
import Comment from './Comment'
import { commentsData } from '../data'

const Comments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    setComments(commentsData)
  }, [])
  return (
    <>
      <div className='comments border-start border-3 my-3'>
        <div className='tab ms-5'>
          <CreateComment />
          {comments.map((comment) => (
            <Comment {...comment} key='comment.id' />
          ))}
        </div>
      </div>
    </>
  )
}

export default Comments
