import errorCreator from '../utils/errorCreator.js'

export const checkEmployeeRole = (req, res, next) => {
  const { role } = req.user

  if (role !== 'EMPLOYEE') {
    throw errorCreator('Only EMPLOYEE can get list of all employers')
  }

  next()
}
