import User from '../domain/user.js'
import errorCreator from '../utils/errorCreator.js'

export const checkFields = (fields) => {
  return (req, res, next) => {
    const data = req.body

    fields.forEach((field) => {
      if (!data[field] || data[field].length === 0) {
        throw errorCreator(`Missing fields: ${field}`, 400)
      }
    })

    next()
  }
}

export const checkEmailExist = async (req, res, next) => {
  const { email } = req.body

  const foundEmail = await User.getUserByEmail(email)

  try {
    if (foundEmail) {
      throw errorCreator('User with provided email already exist', 409)
    }
  } catch (error) {
    next(error)
  }

  next()
}
