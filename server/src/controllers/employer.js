import Employer from '../domain/employer.js'

export const getAllEmployers = async (req, res) => {
  const foundEmployers = await Employer.getAllEmployers()

  res.status(200).json({ employers: foundEmployers })
}

export const getEmployerById = async (req, res) => {
  res.status(200).json({ message: 'success' })
}
