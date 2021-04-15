import axios from 'axios'
import { getToken } from '../util'

const apiUri = '/api/post'

const PostApi = {
  getPosts() {
    return axios.get(`${apiUri}/getPosts`)
  },
  createPost(postData) {
    return axios.post(`${apiUri}/createPost`, postData, {
      headers: { authorization: getToken() },
    })
  },
  getCommentsByPost(postId) {
    return axios.post(`${apiUri}/getCommentsByPost`, postId)
  },
  createUpvote(upvoteData) {
    return axios.post(`${apiUri}/createUpvote`, upvoteData, {
      headers: { authorization: getToken() },
    })
  },
  createDownvote(downvoteData) {
    return axios.post(`${apiUri}/createDownvote`, downvoteData, {
      headers: { authorization: getToken() },
    })
  },
}

export default PostApi
