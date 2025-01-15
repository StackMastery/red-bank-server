import express from 'express'
import CreateNewUser from '../controllers/Auth/createNewUser.js'
import CreateAccesToken from '../controllers/Auth/createAccesToken.js'
import { UserDetails, UserUpdate } from '../controllers/Auth/userCrud.js'
import VerifyToken from '../middlewares/verifyToken.js'

const AuthRoutes = express.Router()

// Create new user
AuthRoutes.post('/create-user', CreateNewUser)
// Create Acces Token
AuthRoutes.post('/create-token', CreateAccesToken)
// Get user details 
AuthRoutes.get('/user', VerifyToken, UserDetails)
// Update user
AuthRoutes.patch('/user/update', VerifyToken, UserUpdate)

export { AuthRoutes }