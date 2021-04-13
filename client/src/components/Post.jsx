import React, { useState } from 'react'
import Comments from './Comments'
import { localDate } from '../util'

const Post = ({
  user: { username },
  createdAt,
  details,
  upvote_count,
  downvote_count,
}) => {
  const token = localStorage.getItem('token')
  const [vote, setVote] = useState({
    upvote: upvote_count,
    downvote: downvote_count,
  })
  const [showComments, setShowComments] = useState(false)
  const toggleComment = (e) => {
    e.preventDefault()
    setShowComments(!showComments)
  }
  const handleVote = (e) => {
    if (!token) return
    setVote({ ...vote, [e.target.name]: parseInt(vote[e.target.name]) + 1 })
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
              <small className='ps-2'>{localDate(createdAt)}</small>
            </div>
            <p>{details}</p>
            <div className='btn-group btn-group-sm' role='group'>
              <button
                onClick={handleVote}
                name='upvote'
                type='button'
                className={`btn btn-outline-primary ${!token && `disabled`}`}
              >
                <span className='badge rounded bg-success me-2'>
                  {vote.upvote}
                </span>
                Upvote
              </button>
              <button
                onClick={handleVote}
                name='downvote'
                type='button'
                className={`btn btn-outline-primary ${!token && `disabled`}`}
              >
                <span className='badge rounded bg-danger me-2'>
                  {vote.downvote}
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

            {showComments && <Comments />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
