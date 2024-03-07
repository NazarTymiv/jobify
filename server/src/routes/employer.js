import { Router } from 'express'
import { getAllEmployers } from '../controllers/employer.js'

const router = Router()

router.get('/', getAllEmployers)

export default router
