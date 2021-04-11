import React, { useState } from 'react'
import CreateComment from './CreateComment'
import Comment from './Comment'

const Post = ({ username, date, details, upvote_count, downvote_count }) => {
  console.log(username)
  const [showComments, setShowComments] = useState(false)
  const toggleComment = (e) => {
    e.preventDefault()
    setShowComments(!showComments)
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 post mb-5 p-3 border rounded bg-light'>
            <div className='topbar mb-3'>
              Posted by
              <small className='px-2'>
                <b>{username}</b>
              </small>
              at
              <small className='ps-2'>{date}</small>
            </div>
            <p>{details}</p>
            <div className='btn-group btn-group-sm' role='group'>
              <button type='button' className='btn btn-outline-primary'>
                <span className='badge rounded bg-success me-2'>
                  {upvote_count}
                </span>
                Upvote
              </button>
              <button type='button' className='btn btn-outline-primary'>
                <span className='badge rounded bg-danger me-2'>
                  {downvote_count}
                </span>
                Downvote
              </button>
              <button
                onClick={toggleComment}
                type='button'
                className='btn btn-outline-primary'
              >
                Comment
              </button>
            </div>

            {showComments && (
              <div className='comments border-start border-3 my-3'>
                <div className='tab ms-5'>
                  <CreateComment />
                  <Comment />
                  <Comment />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
