import { Router } from 'express'
import { registerNewUser } from '../controllers/auth.js'
import {
  checkEmailExist,
  checkFields,
  checkPassword
} from '../middleware/auth.js'

const router = Router()

router.post(
  '/register',
  checkFields(['email', 'password', 'firstName', 'lastName']),
  checkEmailExist,
  checkPassword,
  registerNewUser
)

router.post('/login')

export default router
