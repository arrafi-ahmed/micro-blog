import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

const Home = () => {
  return (
    <>
      <main>
        <CreatePost />

        <Post />
        <Post />
      </main>
    </>
  )
}

export default Home
