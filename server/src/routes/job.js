import { Router } from 'express'
import { createNewJob } from '../controllers/job.js'

const router = Router()

router.post('/', createNewJob)

export default router
