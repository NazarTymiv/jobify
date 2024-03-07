import { Router } from 'express'
import { getUserById } from '../controllers/user.js'

const router = Router()

router.get('/', getUserById)

export default router
