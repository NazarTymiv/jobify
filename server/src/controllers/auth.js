import Auth from '../domain/auth.js'

export const registerNewUser = async (req, res) => {
  const data = req.body

  await Auth.register(data)

  res.status(201).json({ message: 'Success' })
}
