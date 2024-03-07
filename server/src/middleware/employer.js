import errorCreator from '../utils/errorCreator.js'

export const checkEmployeeRole = (req, res, next) => {
  const { role } = req.user

  if (role !== 'EMPLOYEE') {
    throw errorCreator('Only EMPLOYEE can get list of all employers', 401)
  }

  next()
}

export const checkEmployerRole = (req, res, next) => {
  const { role } = req.user

  if (role !== 'EMPLOYER') {
    throw errorCreator('You don not have permission to do this', 401)
  }

  next()
}
