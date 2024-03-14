import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const loginUser = (data) => {
  return axiosClient.post('/auth/login', data)
}

export const registerUser = (data) => {
  return axiosClient.post('/auth/register', data)
}

export const getAllJobs = () => {
  const token = localStorage.getItem('token')

  return axiosClient.get('/job', {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const getUserData = () => {
  const token = localStorage.getItem('token')

  return axiosClient.get('/user', {
    headers: { Authorization: `Bearer ${token}` }
  })
}
