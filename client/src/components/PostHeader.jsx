import React from 'react'
import { Link } from 'react-router-dom'
import { localDate } from '../util'

const PostHeader = ({ userId, username, createdAt }) => {
  return (
    <>
      <div className='topbar d-inline'>
        <img
          className='profile-thumb'
          src='/images/avatardefault_thumb.png'
          alt='default-profile'
        />
        <Link to={`/profile/${userId}`}>
          <span className='fw-bold text-decoration-underline px-1'>
            {username}
          </span>
        </Link>
        <small className='fst-italic ps-1'>{localDate(createdAt)}</small>
      </div>
    </>
  )
}

export default PostHeader
