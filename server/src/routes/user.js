import { Router } from 'express'
import { getUserById, updateUserProfile } from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkFields } from '../middleware/user.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)
router.put('/profile', validateAuthentication, checkFields, updateUserProfile)

export default router
