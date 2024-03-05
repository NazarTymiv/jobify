export const registerNewUser = async (req, res) => {
  const { email, password, role, firstName, lastName } = req.body

  console.log(email, password, role, firstName, lastName)
  res.status(201).json({ message: 'Success' })
}
