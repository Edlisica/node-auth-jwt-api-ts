import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import authRoutes from './routes/authRoutes'
import usersRoutes from './routes/userRoutes'

const app = express()

app.use(express.json())

// Routes
// autenticación
app.use('/auth', authRoutes)
app.use('/users', usersRoutes)

//user

console.log("Esto esta siendo ejecutado")

export default app