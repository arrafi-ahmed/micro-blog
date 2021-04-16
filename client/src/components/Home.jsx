import React, { useState, useEffect, useContext, useRef } from 'react'
import CreatePost from './PostCreate'
import Post from './Post'
import PostApi from '../api/post'
import { GlobalContext } from '../context/globalContext'

const Home = () => {
  const global = useContext(GlobalContext)
  const token = localStorage.getItem('token')
  const [posts, setPosts] = useState([])
  const details = useRef(null)
  const fetchPosts = () => {
    PostApi.getPosts()
      .then((res) => {
        setPosts(res.data.posts)
      })
      .catch((err) =>
        global.setAlert({
          type: 'danger',
          message: err.response ? err.response.data.message : err.toString(),
        })
      )
  }
  useEffect(() => {
    fetchPosts()
  }, [])
  const handlePost = (e) => {
    e.preventDefault()
    const postData = {
      details: details.current.value,
    }
    PostApi.createPost(postData)
      .then((res) => {
        fetchPosts()
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
        {token && <CreatePost ref={details} handlePost={handlePost} />}
        {(posts.length > 0 &&
          posts.map((post) => {
            return <Post {...post} key={post._id} />
          })) || <h5 className='text-center'>No posts found</h5>}
      </main>
    </>
  )
}

export default Home
