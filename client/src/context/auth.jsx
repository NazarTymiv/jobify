import { createContext, useContext, useState } from 'react'
import { loginUser, registerUser } from '../services/apiClient'

const AuthContext = createContext()
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const [user, setUser] = useState({})

  const login = async (credentials) => {
    loginUser(credentials)
      .then(({ data }) => {
        setUserData(data)
      })
      .catch((error) => {
        localStorage.removeItem('token')
        console.log(error)
      })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser({})
  }

  const register = (credentials) => {
    registerUser(credentials)
      .then(({ data }) => {
        setUserData(data)
      })
      .catch((error) => {
        localStorage.removeItem('token')
        console.log(error)
      })
  }

  const setUserData = (data) => {
    const { role } = data.user
    const { firstName, lastName } = data.user.profile

    localStorage.setItem('token', data.token)
    setUser({ role, firstName, lastName })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      <></>
    </AuthContext.Provider>
  )
}
