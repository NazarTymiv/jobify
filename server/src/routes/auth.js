import { Router } from 'express'
import { registerNewUser } from '../controllers/auth.js'
import { checkFields } from '../middleware/auth.js'

const router = Router()

router.post(
  '/register',
  checkFields(['email', 'password', 'firstName', 'lastName']),
  registerNewUser
)

export default router
