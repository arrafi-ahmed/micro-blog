import axios from 'axios'
import { getToken } from '../util'

const apiUri = '/api/comment'

const CommentApi = {
  createComment(commentData) {
    return axios.post(`${apiUri}/createComment`, commentData, {
      headers: { authorization: getToken() },
    })
  },
}

export default CommentApi
