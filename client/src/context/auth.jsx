import { createContext, useEffect, useState } from 'react'
import { getUserData, loginUser, registerUser } from '../services/apiClient'
import { Navigate, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

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
