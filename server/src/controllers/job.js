import Job from '../domain/job.js'

export const createNewJob = async (req, res) => {
  const fields = req.body
  const { id } = req.user

  const createdJob = await Job.createNewJob(id, fields)

  res.status(201).json({ job: createdJob })
}

export const deleteJobById = async (req, res) => {
  const { jobId } = req.params

  await Job.deleteJobById(jobId)

  res.status(201).json({ message: 'Your job successfully deleted' })
}

export const updateJobById = async (req, res) => {
  const { jobId } = req.params
  const fields = req.body

  const updatedJob = await Job.updateJobById(jobId, fields)

  res.status(201).json({ job: updatedJob })
}

export const getAllJobs = async (req, res) => {
  const foundJobs = await Job.getAllJobs()

  res.status(200).json({ jobs: foundJobs })
}

export const addJobToSaved = async (req, res) => {
  const { jobId } = req.params
  const { id } = req.user

  await Job.addJobToSaved(id, jobId)

  res.status(201).json({ message: 'Job successfully added to saved' })
}

export const deleteJobFromSaved = async (req, res) => {
  const { jobId } = req.params
  const { id } = req.user

  await Job.deleteJobFromSaved(id, jobId)

  res.status(201).json({ message: 'Job successfully deleted from saved list' })
}
