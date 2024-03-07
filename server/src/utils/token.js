const { JWT_SECRET, JWT_EXPIRY } = process.env
import jwt from 'jsonwebtoken'
import errorCreator from './errorCreator.js'

export const generateToken = ({ userId, userRole }) => {
  return jwt.sign({ userId, userRole }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
}

export const validateToken = (token) => {
  if (!token) {
    throw errorCreator('Missing token', 401)
  }

  const verifiedToken = jwt.verify(token, JWT_SECRET)

  if (!verifiedToken) {
    throw errorCreator('Provided wrong token', 401)
  }

  return jwt.decode(token)
}
