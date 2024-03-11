import { createContext, useContext, useState } from 'react'
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

        setUser({ role, firstName, lastName })
      })
      .catch((error) => console.log(error))
  }

  return (
    <AuthContext.Provider value={{ user, login }}>
      <></>
    </AuthContext.Provider>
  )
}
