import { createContext, useContext, useEffect, useState } from 'react'
import { loginUser } from '../services/apiClient'

const AuthContext = createContext()
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = () => {
  const [user, setUser] = useState({})

  const login = async (email, password) => {
    loginUser({ email, password })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    login('email@gmail.com', '123123123')
  }, [])

  return <h1>Auth Wrapper</h1>
}
