import Auth from '../domain/auth.js'

export const registerNewUser = async (req, res) => {
  const user = req.user

  const registeredUser = await Auth.register(user)

  res.status(201).json({ user: registeredUser })
}
