import User from '../domain/user.js'
import errorCreator from '../utils/errorCreator.js'
import bcrypt from 'bcrypt'

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
