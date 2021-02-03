import axios from 'axios'

const users = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Accept': 'application/json',
    'Content': 'application/json'
  }
})

export default users
