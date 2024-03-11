import { createContext, useContext, useEffect, useState } from 'react'
import { loginUser } from '../services/apiClient'

const AuthContext = createContext()
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const [user, setUser] = useState({})

  const login = async (email, password) => {
    loginUser({ email, password })
      .then(({ data }) => {
        const { role } = data.user
        const { firstName, lastName } = data.user.profile

        localStorage.setItem('token', data.token)
        setUser({ role, firstName, lastName })
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

  useEffect(() => {
    login('email@gmail.com', '123123123')
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <></>
    </AuthContext.Provider>
  )
}
