import { Router } from 'express'
import { getAllEmployers, getEmployerById } from '../controllers/employer.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkEmployeeRole } from '../middleware/employer.js'

const router = Router()

router.get('/', validateAuthentication, checkEmployeeRole, getAllEmployers)
router.get('/:id', validateAuthentication, checkEmployeeRole, getEmployerById)

export default router
