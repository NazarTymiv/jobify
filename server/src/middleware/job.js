import Job from '../domain/job.js'
import errorCreator from '../utils/errorCreator.js'

export const checkTitleExist = async (req, res, next) => {
  const { title } = req.body

  const foundJob = await Job.getJobByTitle(title)

  try {
    if (foundJob) {
      throw errorCreator('Job with provided title already exist', 400)
    }
  } catch (error) {
    return next(error)
  }

  next()
}
