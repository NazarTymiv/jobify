import { Router } from 'express'
import { createNewJob } from '../controllers/job.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.post('/', validateAuthentication, createNewJob)

export default router
