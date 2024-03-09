import Employer from '../domain/employer.js'

export const getAllEmployers = async (req, res) => {
  const { name } = req.query

  const foundEmployers = await Employer.getAllEmployers(name)

  res.status(200).json({ employers: foundEmployers })
}

export const getEmployerById = async (req, res) => {
  const { id } = req.params

  const foundEmployer = await Employer.getEmployerById(id)

  res.status(200).json(foundEmployer)
}
