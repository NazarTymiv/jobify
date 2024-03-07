import errorCreator from '../utils/errorCreator.js'

const possibleFields = [
  'firstName',
  'lastName',
  'phone_number',
  'country',
  'city',
  'github_url',
  'portfolio_url',
  'profile_picture',
  'cv_url'
]

export const checkFields = (req, res, next) => {
  const fields = req.body
  const fieldsKeys = Object.keys(fields)

  if (fieldsKeys.length === 0) {
    throw errorCreator('Missing fields', 400)
  }

  fieldsKeys.forEach((field) => {
    if (fields[field].length === 0 || !fields[field]) {
      throw errorCreator(`Missing field: ${field}`, 400)
    }

    if (!possibleFields.includes(field)) {
      throw errorCreator(`Wrong field: ${field}`, 400)
    }
  })

  next()
}
