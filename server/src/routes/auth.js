import { Router } from 'express'
import { loginUser, registerNewUser } from '../controllers/auth.js'
import {
  checkCredentials,
  checkEmailExist,
  checkPassword
} from '../middleware/auth.js'
import { checkFields } from '../middleware/general.js'

const router = Router()

router.post(
  '/register',
  checkFields(['email', 'password', 'firstName', 'lastName']),
  checkEmailExist,
  checkPassword,
  registerNewUser
)

router.post(
  '/login',
  checkFields(['email', 'password']),
  checkCredentials,
  loginUser
)

export default router
