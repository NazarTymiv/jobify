import User from '../domain/user.js'
import errorCreator from '../utils/errorCreator.js'
import bcrypt from 'bcrypt'

const possibleFields = [
  'firstName',
  'lastName',
  'phone_number',
  'country',
  'city',
  'github_url',
  'portfolio_url',
  'profile_picture',
  'cv_url'
]

export const checkUserFields = (req, res, next) => {
  const fields = req.body
  const fieldsKeys = Object.keys(fields)

  if (fieldsKeys.length === 0) {
    throw errorCreator('Missing fields', 400)
  }

  fieldsKeys.forEach((field) => {
    if (fields[field].length === 0 || !fields[field]) {
      throw errorCreator(`Missing field: ${field}`, 400)
    }

    if (!possibleFields.includes(field)) {
      throw errorCreator(`Wrong field: ${field}`, 400)
    }
  })

  next()
}

export const checkDeleteUser = (req, res, next) => {
  const { userId } = req.params
  const { id } = req.user

  if (Number(userId) !== Number(id)) {
    throw errorCreator('You are not able to delete another user')
  }

  next()
}

export const checkChangingPassword = async (req, res, next) => {
  const { currentPassword, newPassword } = req.body
  const { id } = req.user

  const foundUser = await User.getUserById(id)
  const checkedPassword = await bcrypt.compare(
    currentPassword,
    foundUser.password
  )

  try {
    if (!checkedPassword) {
      throw errorCreator('Wrong password', 401)
    }

    if (currentPassword === newPassword) {
      throw errorCreator(
        "New password can't be the same as current password",
        400
      )
    }
  } catch (error) {
    return next(error)
  }

  next()
}
