import express from 'express'
import CreateNewUser from '../controllers/Auth/createNewUser.js'

const AuthRoutes = express.Router()

// Create new user
AuthRoutes.post('/create-user', CreateNewUser)

export { AuthRoutes }