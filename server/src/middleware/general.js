import errorCreator from '../utils/errorCreator.js'

export const checkFields = (fields) => {
  return (req, res, next) => {
    const data = req.body

    fields.forEach((field) => {
      if (!data[field] || data[field].length === 0) {
        throw errorCreator(`Missing fields: ${field}`, 400)
      }
    })

    next()
  }
}

export const checkAnyFields = (possibleFields) => {
  return (req, res, next) => {
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
}
