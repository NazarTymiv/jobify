import { Router } from 'express'
import { registerNewUser } from '../controllers/auth.js'
import { checkEmailExist, checkFields } from '../middleware/auth.js'

const router = Router()

router.post(
  '/register',
  checkFields(['email', 'password', 'firstName', 'lastName']),
  checkEmailExist,
  registerNewUser
)

export default router
