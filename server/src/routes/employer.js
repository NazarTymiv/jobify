import { Router } from 'express'
import { getAllEmployers } from '../controllers/employer.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkEmployeeRole } from '../middleware/employer.js'

const router = Router()

router.get('/', validateAuthentication, checkEmployeeRole, getAllEmployers)

export default router
