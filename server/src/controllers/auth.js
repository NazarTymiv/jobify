import Auth from '../domain/auth.js'
import { generateToken } from '../utils/token.js'

export const registerNewUser = async (req, res) => {
  const user = req.user

  const registeredUser = await Auth.register(user)

  const token = generateToken({
    userId: registeredUser.id,
    userRole: registeredUser.role
  })

  res.status(201).json({ token, user: registeredUser })
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  console.log(email, password)

  res.status(201).json({ message: 'Success' })
}
