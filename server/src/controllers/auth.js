import Auth from '../domain/auth.js'
import bcrypt from 'bcrypt'

export const registerNewUser = async (req, res) => {
  const { email, password, role, firstName, lastName } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  const registeredUser = await Auth.register({
    email,
    hashedPassword,
    role,
    firstName,
    lastName
  })

  res.status(201).json({ user: registeredUser })
}
