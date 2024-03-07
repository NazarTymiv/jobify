import { Router } from 'express'
import { getUserById } from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)

export default router
