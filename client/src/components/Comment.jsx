import React from 'react'
import { localDate } from '../util'

const Comment = ({ username, details, createdAt }) => {
  return (
    <>
      <div className='comment mb-3 p-2 border rounded'>
        <div className='topbar'>
          <small>
            <b>{username}</b>
          </small>{' '}
          at
          <small>
            {' '}
            <i>{localDate(createdAt)}</i>
          </small>
        </div>
        <p>{details}</p>
      </div>
    </>
  )
}

export default Comment
