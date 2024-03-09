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
  const { followsId } = req.params
  const { id } = req.user

  const addedFollower = await User.addNewFollower(id, followsId)

  res.status(201).json({
    message: `You successfully started to follow user ${addedFollower.follows.id}`
  })
}

export const deleteFollower = async (req, res) => {
  const { followsId } = req.params
  const { id } = req.user

  await User.deleteFollower(id, followsId)

  res
    .status(201)
    .json({ message: 'You successfully delete follow for this employer' })
}

export const getAllFollowers = async (req, res) => {
  const { id } = req.user

  const foundFollowers = await User.getAllFollowers(id)

  res.status(200).json({ followers: foundFollowers })
}
