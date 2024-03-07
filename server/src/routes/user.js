import { Router } from 'express'
import { getUserById, updateUserProfile } from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)
router.put('/profile', validateAuthentication, updateUserProfile)

export default router
