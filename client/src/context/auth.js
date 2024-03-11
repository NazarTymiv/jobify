import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()
export const AuthData = () => useContext(AuthContext)

export const AuthWrapper = async () => {
  const [user, setUser] = useState()

  return <h1>Auth Wrapper</h1>
}
