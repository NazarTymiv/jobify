import { createContext, useState } from 'react'
import { loginUser } from '../services/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const login = async (credentials) => {
    const { data } = await loginUser(credentials)

    localStorage.setItem('token', data.token)

    setUser({
      role: data.user.role,
      firstName: data.user.profile.firstName,
      lastName: data.user.profile.lastName
    })

    navigate('/')
  }

  const value = {
    login,
    user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to={'/login'} />
  }

  return <main>{children}</main>
}

export { AuthContext, AuthProvider, ProtectedRoute }
