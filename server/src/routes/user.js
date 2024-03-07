import { Router } from 'express'
import {
  getUserById,
  updateUserProfile,
  deleteUserById,
  updateUserPassword
} from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'
import { checkDeleteUser, checkFields } from '../middleware/user.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)
router.put('/profile', validateAuthentication, checkFields, updateUserProfile)
router.delete(
  '/:userId',
  validateAuthentication,
  checkDeleteUser,
  deleteUserById
)
router.put('/password', updateUserPassword)

export default router
