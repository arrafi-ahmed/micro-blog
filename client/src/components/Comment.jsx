import React from 'react'
import { Link } from 'react-router-dom'
import { localDate } from '../util'

const Comment = ({
  user_id: { _id: userId, username },
  details,
  createdAt,
}) => {
  return (
    <>
      <div className='comment mb-3 p-2 border rounded'>
        <div className='topbar'>
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
        </div>
        <p>{details}</p>
      </div>
    </>
  )
}

export default Comment
