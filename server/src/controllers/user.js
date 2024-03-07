export const getUserById = (req, res) => {
  const { profile } = req.user

  res.status(200).json({ profile })
}

export const updateUserProfile = async (req, res) => {
  const fields = req.body

  res.status(201).json({ message: 'success' })
}
