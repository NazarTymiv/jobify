export const getUserById = async (req, res) => {
  const { profile } = req.user

  res.status(200).json({ profile })
}
