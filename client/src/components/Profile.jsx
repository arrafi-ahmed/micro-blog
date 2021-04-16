import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from './Post'
import Spinner from './Spinner'
import UserApi from '../api/user'
import { localDate } from '../util'
import { GlobalContext } from '../context/globalContext'

const Profile = () => {
  const global = useContext(GlobalContext)
  const token = localStorage.getItem('token')
  const { userId } = useParams()
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const fetchUser = () => {
    UserApi.getPostsByUserId({ userId })
      .then((res) => {
        if (res.data.user) {
          global.setLoading(false)
          setUser(res.data.user)
          setPosts(res.data.user.posts)
        }
      })
      .catch((err) => {
        global.setLoading(false)
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      })
  }
  const fetchProfile = () => {
    UserApi.getOwnProfile()
      .then((res) => {
        if (res.data.user) {
          global.setLoading(false)
          setUser(res.data.user)
          setPosts(res.data.user.posts)
        }
      })
      .catch((err) => {
        global.setLoading(false)
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      })
  }
  useEffect(() => {
    if (token && !userId) {
      global.setLoading(true)
      fetchProfile()
    } else if (userId) {
      global.setLoading(true)
      fetchUser()
    }
  }, [])

  return (
    <>
      {global.loading ? (
        <Spinner />
      ) : (
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
                    <span className='fw-bold h4 px-3'>
                      {user && user.username}
                    </span>
                  </Link>
                  <br />
                  {user && (
                    <small className='ms-3 fw-light'>
                      Joined at: {localDate(user.createdAt)}
                    </small>
                  )}
                </div>
                {(posts &&
                  posts.length > 0 &&
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
      )}
    </>
  )
}

export default Profile
