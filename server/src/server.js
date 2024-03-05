import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRouter from './routes/auth.js'

const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRouter)

app.use((err, req, res, next) => {
  res.status(err.status ?? 500).json({ error: err.message })
})

export default app
