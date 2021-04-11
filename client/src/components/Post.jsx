import React from 'react'
import CreateComment from './CreateComment'
import Comment from './Comment'

const Post = () => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 post mb-5 p-3 border rounded bg-light'>
            <div className='topbar mb-3'>
              Posted by
              <small>
                <b>mark06</b>
              </small>{' '}
              at
              <small>
                <i>01/02/2021</i>
              </small>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              vitae nesciunt aliquam, blanditiis possimus dolorem aliquid
              assumenda eos. Doloribus cupiditate corporis maxime reiciendis ad
              doloremque architecto, illo esse? Placeat, suscipit?
            </p>
            <div className='btn-group btn-group-sm' role='group'>
              <button type='button' className='btn btn-outline-primary'>
                <span className='badge rounded bg-success'>20</span>
                Upvote
              </button>
              <button type='button' className='btn btn-outline-primary'>
                <span className='badge rounded bg-danger'>10</span>
                Downvote
              </button>
              <button type='button' className='btn btn-outline-primary'>
                Comment
              </button>
            </div>

            <div className='comments border-start border-3 my-3'>
              <div className='tab ms-5'>
                <CreateComment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
