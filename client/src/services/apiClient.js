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

export const updateUserProfile = (data) => {
  const token = localStorage.getItem('token')

  return axiosClient.put('/user/profile', data, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const addJobToSaved = (jobId) => {
  const token = localStorage.getItem('token')

  return axiosClient.post(
    `/job/${jobId}/save`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
}

export const getAllSavedJobs = () => {
  const token = localStorage.getItem('token')

  return axiosClient.get('/job/save', {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const deleteJobFromSaved = (jobId) => {
  const token = localStorage.getItem('token')

  return axiosClient.delete(`/job/${jobId}/save`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const addJobToRemoved = (jobId) => {
  const token = localStorage.getItem('token')

  return axiosClient.post(
    `/job/${jobId}/removed`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
}

export const getAllCreatedJobs = () => {
  const token = localStorage.getItem('token')

  return axiosClient.get(`/job/created`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}

export const deleteJob = (jobId) => {
  const token = localStorage.getItem('token')

  return axiosClient.delete(`/job/${jobId}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
}
