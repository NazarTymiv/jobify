import { createContext, useEffect, useState } from 'react'
import { getUserData, loginUser, registerUser } from '../services/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import useAuth from '../hooks/useAuth'
import Message from '../components/Message'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const login = async (credentials) => {
    const { data } = await loginUser(credentials)

    setUserData(data.user, data.token)

    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({})

    navigate('/login')
  }

  const register = async (credentials) => {
    const { data } = await registerUser(credentials)

    setUserData(data.user, data.token)

    navigate('/')
  }

  const setUserData = (user, token) => {
    if (token) {
      localStorage.setItem('token', token)
    }

    setUser({
      role: user.role,
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      profile_picture: user.profile.profile_picture
    })
  }

  const getUserDataIfTokenExist = async () => {
    try {
      const { data } = await getUserData()

      setUserData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUserDataIfTokenExist()
    }
  }, [])

  const value = {
    login,
    logout,
    register,
    user,
    message,
    setMessage
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const { message } = useAuth()

  if (!token) {
    return <Navigate to={'/login'} />
  }

  return (
    <>
      <Navigation />
      {children}
      {message && <Message message={message} />}
    </>
  )
}

const ProtectedEmployee = ({ children }) => {
  const { user } = useAuth()

  if (user && user.role !== 'EMPLOYEE') {
    return <Navigate to={'/profile'} />
  }

  return <>{children}</>
}

const ProtectedEmployer = ({ children }) => {
  const { user } = useAuth()

  if (user && user.role !== 'EMPLOYER') {
    return <Navigate to={'/'} />
  }

  return <>{children}</>
}

export {
  AuthContext,
  AuthProvider,
  ProtectedRoute,
  ProtectedEmployee,
  ProtectedEmployer
}
