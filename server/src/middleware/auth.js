import User from '../domain/user.js'
import errorCreator from '../utils/errorCreator.js'
import bcrypt from 'bcrypt'
import { validateToken } from '../utils/token.js'

export const checkEmailExist = async (req, res, next) => {
  const { email } = req.body

  const foundEmail = await User.getUserByEmail(email)

  try {
    if (foundEmail) {
      throw errorCreator('User with provided email already exist', 409)
    }
  } catch (error) {
    return next(error)
  }

  next()
}

export const checkPassword = async (req, res, next) => {
  const { password } = req.body

  try {
    if (password.length < 8) {
      throw errorCreator('Password must be at least 8 characters', 400)
    }
  } catch (error) {
    return next(error)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  req.user = {
    ...req.body,
    hashedPassword
  }

  delete req.user.password

  next()
}

export const checkCredentials = async (req, res, next) => {
  const { email, password } = req.body

  const foundUser = await User.getUserByEmail(email)

  try {
    if (!foundUser) {
      throw credentialError()
    }

    const checkPassword = await bcrypt.compare(password, foundUser.password)

    if (!checkPassword) {
      throw credentialError()
    }
  } catch (error) {
    return next(error)
  }

  delete foundUser.password
  req.user = foundUser

  next()
}

const credentialError = () => {
  return errorCreator('Incorrect email or password', 401)
}

export const validateAuthentication = async (req, res, next) => {
  const header = req.header('authorization')

  try {
    if (!header) {
      throw errorCreator('Missing Authorization header', 401)
    }

    const [type, token] = header.split(' ')

    const validatedToken = validateToken(token)

    const foundUser = await User.getUserById(validatedToken.userId)
    delete foundUser.password
    req.user = foundUser
  } catch (error) {
    return next(error)
  }

  next()
}
