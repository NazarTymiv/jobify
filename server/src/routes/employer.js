import { Router } from 'express'
import { getAllEmployers } from '../controllers/employer.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.get('/', validateAuthentication, getAllEmployers)

export default router
