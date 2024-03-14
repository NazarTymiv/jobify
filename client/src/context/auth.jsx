import { createContext, useState } from 'react'
import { loginUser, registerUser } from '../services/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const login = async (credentials) => {
    const { data } = await loginUser(credentials)

    setUserData(data)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({})

    navigate('/login')
  }

  const register = async (credentials) => {
    const { data } = await registerUser(credentials)

    setUserData(data)
  }

  const setUserData = (data) => {
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
    logout,
    register,
    user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to={'/login'} />
  }

  return (
    <main className="w-full min-h-screen">
      <Navigation />
      {children}
    </main>
  )
}

export { AuthContext, AuthProvider, ProtectedRoute }
