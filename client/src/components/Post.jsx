import React, { useState, useContext } from 'react'
import Comments from './Comments'
import PostApi from '../api/post'
import PostHeader from '../components/PostHeader'
import ButtonVote from '../components/ButtonVote'
import Button from '../components/Button'
import { GlobalContext } from '../context/globalContext'

const Post = ({
  _id,
  user: { _id: userId, username },
  createdAt,
  details,
  upvote_count,
  downvote_count,
}) => {
  const global = useContext(GlobalContext)
  const token = localStorage.getItem('token')
  const [upvote, setUpvote] = useState(upvote_count)
  const [downvote, setDownvote] = useState(downvote_count)
  const [disableVote, setDisableVote] = useState({
    upvote: false,
    downvote: false,
  })
  const [showComments, setShowComments] = useState(false)
  const toggleComment = (e) => {
    e.preventDefault()
    setShowComments(!showComments)
  }
  const handleUpvote = (e) => {
    e.preventDefault()
    if (!token || disableVote.upvote) return
    setDisableVote({ upvote: true, downvote: false })
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
    if (!token || disableVote.downvote) return
    setDisableVote({ downvote: true, upvote: false })
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
            <PostHeader
              userId={userId}
              username={username}
              createdAt={createdAt}
            />
            <p className='mt-3 mb-4 ms-2 fs-5'>{details}</p>
            <div className='btn-group btn-group-sm' role='group'>
              <ButtonVote
                event={handleUpvote}
                disableVote={disableVote}
                voteCount={upvote}
                btnText='upvote'
              />
              <ButtonVote
                event={handleDownvote}
                disableVote={disableVote}
                voteCount={downvote}
                btnText='downvote'
              />
              <Button event={toggleComment} btnText='Comment' />
            </div>

            {showComments && <Comments postId={_id} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
