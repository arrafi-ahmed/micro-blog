import axios from 'axios'

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
}

export default UserApi
