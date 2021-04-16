import axios from 'axios'
import { getToken } from '../util'

const apiUri = '/api/user'

const UserApi = {
  isUserExist(username) {
    return axios.post(`${apiUri}/isUserExist`, { username })
  },
  createUser(signupData) {
    return axios.post(`${apiUri}/createUser`, signupData)
  },
  checkCredentials(signinData) {
    return axios.post(`${apiUri}/checkCredentials`, { ...signinData })
  },
  getPostsByUserId(userData) {
    return axios.post(`${apiUri}/getPostsByUserId`, userData)
  },
  getOwnProfile() {
    return axios.post(`${apiUri}/getOwnProfile`, null, {
      headers: { authorization: getToken() },
    })
  },
}

export default UserApi
