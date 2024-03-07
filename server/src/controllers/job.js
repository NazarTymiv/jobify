import Job from '../domain/job.js'

export const createNewJob = async (req, res) => {
  const fields = req.body
  const { id } = req.user

  const createdJob = await Job.createNewJob(id, fields)

  res.status(201).json({ job: createdJob })
}

export const deleteJobById = async (req, res) => {
  res.status(201).json({ message: 'success' })
}
