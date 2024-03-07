import { Router } from 'express'
import {
  getUserById,
  updateUserProfile,
  deleteUserById,
  updateUserPassword
} from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'
import {
  checkChangingPassword,
  checkDeleteUser,
  checkUserFields
} from '../middleware/user.js'
import { checkFields } from '../middleware/general.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)
router.put(
  '/profile',
  validateAuthentication,
  checkUserFields,
  updateUserProfile
)
router.delete(
  '/:userId',
  validateAuthentication,
  checkDeleteUser,
  deleteUserById
)
router.put(
  '/password',
  validateAuthentication,
  checkFields(['currentPassword', 'newPassword']),
  checkChangingPassword,
  updateUserPassword
)

export default router
