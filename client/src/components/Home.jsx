import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import { posts } from '../data'

const Home = () => {
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
