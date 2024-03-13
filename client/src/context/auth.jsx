import { createContext, useState } from 'react'
import { loginUser } from '../services/apiClient'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const login = async (credentials) => {
    const { data } = await loginUser(credentials)

    localStorage.setItem('token', data.token)

    setUser({
      role: data.user.role,
      firstName: data.user.profile.firstName,
      lastName: data.user.profile.lastName
    })
  }

  const value = {
    login,
    user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
