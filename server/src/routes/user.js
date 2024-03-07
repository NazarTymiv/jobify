import { Router } from 'express'
import {
  getUserById,
  updateUserProfile,
  deleteUserById
} from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkFields } from '../middleware/user.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)
router.put('/profile', validateAuthentication, checkFields, updateUserProfile)
router.delete('/', deleteUserById)

export default router
