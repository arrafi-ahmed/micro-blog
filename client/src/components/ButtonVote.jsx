import React from 'react'

const ButtonVote = ({ event, btnText, disableVote, voteCount }) => {
  const token = localStorage.getItem('token')
  let color, disable
  if (btnText == 'upvote') {
    color = 'success'
    disable = disableVote.upvote
  } else if (btnText == 'downvote') {
    color = 'danger'
    disable = disableVote.downvote
  }
  return (
    <>
      <button
        onClick={event}
        name={btnText}
        type='button'
        className={`btn btn-outline-primary ${
          !token || (disable && `disabled`)
        }`}
      >
        <span className={`badge rounded me-2 bg-${color}`}>{voteCount}</span>
        <p className='text-capitalize d-inline-block mb-0'>{btnText}</p>
      </button>
    </>
  )
}

export default ButtonVote
