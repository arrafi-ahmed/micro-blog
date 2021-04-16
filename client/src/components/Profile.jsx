import React, { useState, useEffect, useContext, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from './Post'
import UserApi from '../api/user'
import PostApi from '../api/post'
import { localDate } from '../util'
import { GlobalContext } from '../context/globalContext'

const Profile = () => {
  const global = useContext(GlobalContext)
  const { userId } = useParams()
  const token = localStorage.getItem('token')
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const details = useRef(null)
  const fetchUser = () => {
    UserApi.getPostsByUserId({ userId })
      .then((res) => {
        setUser(res.data.user)
        setPosts(res.data.user.posts)
      })
      .catch((err) =>
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      )
  }
  useEffect(() => {
    fetchUser()
  }, [])
  const handlePost = (e) => {
    e.preventDefault()
    const postData = {
      details: details.current.value,
    }
    PostApi.createPost(postData)
      .then((res) => {
        fetchUser()
        global.setAlert({ type: 'success', message: res.data.message })
      })
      .catch((err) =>
        global.setAlert({ type: 'danger', message: err.response.data.message })
      )
    details.current.value = null
  }
  return (
    <>
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='topbar border-bottom pb-3 mb-5'>
                <img
                  className='img-fluid profile'
                  src='/images/avatardefault.png'
                  alt='default-profile'
                />
                <Link to={`/profile/${userId}`}>
                  <span className='fw-bold h4 px-3'>{user.username}</span>
                </Link>
                <br />
                <small className='ms-3 fw-light'>
                  Joined at: {localDate(user.createdAt)}
                </small>
              </div>
              {(posts.length > 0 &&
                posts.map((post) => {
                  post.user = {
                    _id: userId,
                    username: user.username,
                  }
                  return <Post {...post} key={post._id} />
                })) || <h5 className='text-center'>No posts found</h5>}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Profile
