import User from '../domain/user.js'
import bcrypt from 'bcrypt'

export const getUserById = (req, res) => {
  const { profile } = req.user

  res.status(200).json({ profile })
}

export const updateUserProfile = async (req, res) => {
  const fields = req.body
  const { id } = req.user

  const updatedProfile = await User.updateUserProfile(id, fields)

  res.status(201).json({ profile: updatedProfile })
}

export const deleteUserById = async (req, res) => {
  const { userId } = req.params

  await User.deleteUserById(userId)

  res.status(201).json({ message: 'Your account successfully deleted' })
}

export const updateUserPassword = async (req, res) => {
  const { newPassword } = req.body
  const { id } = req.user

  const hashedPassword = await bcrypt.hash(newPassword, 10)

  await User.updateUserPassword(id, hashedPassword)

  res.status(201).json({ message: 'Your password was successfully changed' })
}

export const addFollower = async (req, res) => {
  res.status(201).json({ message: 'success' })
}
