import { Router } from 'express'
import { createNewJob, deleteJobById } from '../controllers/job.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkFields } from '../middleware/general.js'
import { checkEmployerRole } from '../middleware/employer.js'
import { checkTitleExist } from '../middleware/job.js'

const router = Router()

router.post(
  '/',
  validateAuthentication,
  checkEmployerRole,
  checkFields(['title']),
  checkTitleExist,
  createNewJob
)
router.delete('/:jobId', validateAuthentication, deleteJobById)

export default router
