import User from '../domain/user.js'

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

  res.status(201).json({ message: 'success' })
}
