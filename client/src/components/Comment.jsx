import React from 'react'

const Comment = ({ name, details, date }) => {
  return (
    <>
      <div className='comment mb-3 p-2 border rounded'>
        <div className='topbar'>
          <small>
            <b>{name}</b>
          </small>{' '}
          at
          <small>
            <i>{date}</i>
          </small>
        </div>
        <p>{details}</p>
      </div>
    </>
  )
}

export default Comment
