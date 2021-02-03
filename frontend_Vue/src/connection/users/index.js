import axios from 'axios'

const users = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    'Accept': 'application/json',
    'Content': 'application/json'
  }
})

users.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('token');
  console.log(token);
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  console.log(config);
  return config
}, function(erro) {
  return Promise.reject(erro)
})

export default users
