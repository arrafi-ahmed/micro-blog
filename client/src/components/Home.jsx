import React, { useState, useEffect } from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import { postsData } from '../data'

const Home = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    setPosts(postsData)
  }, [])
  return (
    <>
      <main>
        <CreatePost />

        {posts.map((post) => {
          return <Post {...post} key={post.id} />
        })}
      </main>
    </>
  )
}

export default Home
