import Auth from '../domain/auth.js'
import jwt from 'jsonwebtoken'

const { JWT_SECRET, JWT_EXPIRY } = process.env

export const registerNewUser = async (req, res) => {
  const user = req.user

  const registeredUser = await Auth.register(user)

  const token = jwt.sign(
    { userId: registeredUser.id, userRole: registeredUser.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRY }
  )

  res.status(201).json({ token, user: registeredUser })
}
