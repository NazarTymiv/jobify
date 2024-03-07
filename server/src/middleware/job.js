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

export const checkJobOwner = async (req, res, next) => {
  const { jobId } = req.params
  const { id } = req.user

  const foundJob = await Job.getJobById(jobId)

  try {
    if (foundJob.ownerId !== id) {
      throw errorCreator(
        'You can not to do any changes in the job of another employer',
        401
      )
    }
  } catch (error) {
    return next(error)
  }

  next()
}

export const checkSavedJobExist = async (req, res, next) => {
  const { jobId } = req.params
  const { id } = req.user

  const foundJob = await Job.getSavedJobByUserIdAndJobId(id, jobId)

  try {
    if (foundJob) {
      throw errorCreator('The job already added to saved list', 409)
    }
  } catch (error) {
    return next(error)
  }

  next()
}
