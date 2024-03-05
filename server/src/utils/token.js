const { JWT_SECRET, JWT_EXPIRY } = process.env
import jwt from 'jsonwebtoken'

export const generateToken = ({ userId, userRole }) => {
  return jwt.sign({ userId, userRole }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
}
