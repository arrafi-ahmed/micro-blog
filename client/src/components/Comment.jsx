import React from 'react'
import PostHeader from '../components/PostHeader'

const Comment = ({
  user_id: { _id: userId, username },
  details,
  createdAt,
}) => {
  return (
    <>
      <div className='comment mb-3 p-2 border rounded'>
        <div className='topbar'>
          <PostHeader
            userId={userId}
            username={username}
            createdAt={createdAt}
          />
        </div>
        <p className='m-1'>{details}</p>
      </div>
    </>
  )
}

export default Comment
