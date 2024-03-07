import { Router } from 'express'
import { createNewJob } from '../controllers/job.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkFields } from '../middleware/general.js'

const router = Router()

router.post('/', validateAuthentication, checkFields(['title']), createNewJob)

export default router
