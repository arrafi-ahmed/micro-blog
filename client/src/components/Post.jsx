import React, { useState, useContext } from 'react'
import Comments from './Comments'
import PostApi from '../api/post'
import { localDate } from '../util'
import { GlobalContext } from '../context/globalContext'

const Post = ({
  _id,
  user: { username },
  createdAt,
  details,
  upvote_count,
  downvote_count,
}) => {
  const global = useContext(GlobalContext)
  const token = localStorage.getItem('token')
  const [upvote, setUpvote] = useState(upvote_count)
  const [downvote, setDownvote] = useState(downvote_count)
  const [showComments, setShowComments] = useState(false)
  const toggleComment = (e) => {
    e.preventDefault()
    setShowComments(!showComments)
  }
  const handleUpvote = (e) => {
    e.preventDefault()
    if (!token) return
    setUpvote(upvote + 1)
    PostApi.createUpvote({ postId: _id })
      .then((res) => {
        if (res.data.changeDownvote) {
          setDownvote(downvote - 1)
        }
        global.setAlert({ type: 'success', message: 'Upvote successful' })
      })
      .catch((err) => {
        setUpvote(upvote)
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      })
  }
  const handleDownvote = (e) => {
    e.preventDefault()
    if (!token) return
    setDownvote(downvote + 1)
    PostApi.createDownvote({ postId: _id })
      .then((res) => {
        if (res.data.changeUpvote) {
          setUpvote(upvote - 1)
        }
        global.setAlert({ type: 'success', message: 'Downvote successful' })
      })
      .catch((err) => {
        setDownvote(downvote)
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      })
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 post mb-3 p-3 border rounded bg-light'>
            <div className='topbar border-bottom d-inline'>
              Posted by
              <small className='px-2'>
                <b>{username}</b>
              </small>
              at
              <small className='ps-2'>{localDate(createdAt)}</small>
            </div>
            <p className='mt-2 mb-3 fs-5'>{details}</p>
            <div className='btn-group btn-group-sm' role='group'>
              <button
                onClick={handleUpvote}
                name='upvote'
                type='button'
                className={`btn btn-outline-primary ${!token && `disabled`}`}
              >
                <span className='badge rounded bg-success me-2'>{upvote}</span>
                Upvote
              </button>
              <button
                onClick={handleDownvote}
                name='downvote'
                type='button'
                className={`btn btn-outline-primary ${!token && `disabled`}`}
              >
                <span className='badge rounded bg-danger me-2'>{downvote}</span>
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

            {showComments && <Comments postId={_id} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
