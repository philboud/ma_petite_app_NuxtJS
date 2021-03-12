import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://back-mapapp.herokuapp.com/'
  })
}
