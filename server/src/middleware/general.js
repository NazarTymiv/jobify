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

    const importantFields = ['firstName', 'lastName']

    if (fieldsKeys.length === 0) {
      throw errorCreator('Missing fields', 400)
    }

    importantFields.forEach((field) => {
      if (!fieldsKeys.includes(field) || fields[field].length === 0) {
        throw errorCreator(`Missing field: ${field}`, 400)
      }
    })

    fieldsKeys.forEach((field) => {
      if (!possibleFields.includes(field)) {
        throw errorCreator(`Wrong field: ${field}`, 400)
      }
    })

    next()
  }
}
