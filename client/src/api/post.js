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
}

export default PostApi
