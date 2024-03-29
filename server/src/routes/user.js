import { Router } from 'express'
import {
  getUserById,
  updateUserProfile,
  deleteUserById,
  updateUserPassword,
  addFollower,
  deleteFollower,
  getAllFollowers
} from '../controllers/user.js'
import { validateAuthentication } from '../middleware/auth.js'
import {
  checkChangingPassword,
  checkDeleteUser,
  checkFollowExist,
  checkFollowerExist,
  checkFollowerRole
} from '../middleware/user.js'
import { checkAnyFields, checkFields } from '../middleware/general.js'
import { checkEmployeeRole } from '../middleware/employer.js'

const router = Router()

router.get('/', validateAuthentication, getUserById)
router.put(
  '/profile',
  validateAuthentication,
  checkAnyFields([
    'firstName',
    'lastName',
    'phone_number',
    'country',
    'city',
    'github_url',
    'portfolio_url',
    'profile_picture',
    'cv_url'
  ]),
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
router.post(
  '/:followsId/follow',
  validateAuthentication,
  checkEmployeeRole,
  checkFollowerRole,
  checkFollowerExist,
  addFollower
)
router.delete(
  '/:followsId/follow',
  validateAuthentication,
  checkEmployeeRole,
  checkFollowExist,
  deleteFollower
)
router.get(
  '/follow',
  validateAuthentication,
  checkEmployeeRole,
  getAllFollowers
)

export default router
