import { Router } from 'express'
import {
  addJobToRemoved,
  addJobToSaved,
  createNewJob,
  deleteJobById,
  deleteJobFromSaved,
  getAllJobs,
  getAllSavedJobs,
  updateJobById
} from '../controllers/job.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkAnyFields, checkFields } from '../middleware/general.js'
import { checkEmployeeRole, checkEmployerRole } from '../middleware/employer.js'
import {
  checkJobExist,
  checkJobOwner,
  checkSavedJobExist,
  checkTitleExist,
  getCountOfViewedJobs
} from '../middleware/job.js'

const router = Router()

router.post(
  '/',
  validateAuthentication,
  checkEmployerRole,
  checkFields(['title']),
  checkTitleExist,
  createNewJob
)
router.delete(
  '/:jobId',
  validateAuthentication,
  checkEmployerRole,
  checkJobOwner,
  deleteJobById
)
router.put(
  '/:jobId',
  validateAuthentication,
  checkEmployerRole,
  checkJobOwner,
  checkAnyFields([
    'title',
    'description',
    'background',
    'skills',
    'tags',
    'location'
  ]),
  updateJobById
)
router.get(
  '/',
  validateAuthentication,
  checkEmployeeRole,
  getCountOfViewedJobs,
  getAllJobs
)
router.post(
  '/:jobId/save',
  validateAuthentication,
  checkEmployeeRole,
  checkSavedJobExist,
  addJobToSaved
)
router.delete(
  '/:jobId/save',
  validateAuthentication,
  checkEmployeeRole,
  checkJobExist,
  deleteJobFromSaved
)
router.get('/save', validateAuthentication, checkEmployeeRole, getAllSavedJobs)
router.post(
  '/:jobId/removed',
  validateAuthentication,
  checkEmployeeRole,
  addJobToRemoved
)

export default router
