import React from 'react'

const Comment = () => {
  return (
    <>
      <div className='comment mb-3 p-2 border rounded'>
        <div className='topbar'>
          <small>
            <b>chris12</b>
          </small>{' '}
          at
          <small>
            <i>01/02/2021</i>
          </small>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          vitae nesciunt aliquam, blanditiis possimus dolorem aliquid assumenda
          eos. Doloribus cupiditate corporis maxime reiciendis ad doloremque
          architecto, illo esse? Placeat, suscipit?
        </p>
      </div>
    </>
  )
}

export default Comment
