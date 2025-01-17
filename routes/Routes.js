import express from 'express'
import VerifyToken from '../middlewares/verifyToken.js'
import CreateBloodDonation from '../controllers/BloodDonatin/CreateBloodDonation.js'
import { DeleteDonationReq, GetBloodDonationForDonor, GetBLoodDonationReqDetails, PaginatedBloodDonation, UpdateDonationRequest } from '../controllers/BloodDonatin/BloodDonation.js'
import CreateNewUser from '../controllers/Auth/createNewUser.js'
import { UpdateUserRole, UpdateUserStatus, UserDetails, UserUpdate } from '../controllers/Auth/userCrud.js'
import CreateAccesToken from '../controllers/Auth/createAccesToken.js'
import { DashboardOverview, GetAllDonationReqPaginated, GetAllUserPaginated } from '../controllers/Admin/admin.controller.js'
import ClearCookie from '../controllers/Auth/clearCookie.js'

const Routes = express.Router()

//-------- Donation Crud
// Create Donation
Routes.post(`/donation/create`, VerifyToken, CreateBloodDonation)
// Get Blood donation Request with limit
Routes.get(`/donation`, VerifyToken, GetBloodDonationForDonor)
// Get Donation Details By Id
Routes.get(`/donation/details`, VerifyToken, GetBLoodDonationReqDetails)
// Delete Blood donation request
Routes.delete(`/donation/delete`, VerifyToken, DeleteDonationReq)
// Update Donation Request
Routes.patch(`/donation/update`, VerifyToken, UpdateDonationRequest)
// Donation Paginated 
Routes.get('/donation/paginated', VerifyToken, PaginatedBloodDonation)
// Create new user
Routes.post('/auth/create-user', CreateNewUser)
// Create Acces Token
Routes.post('/auth/create-token', CreateAccesToken)
// Get user details 
Routes.get('/auth/user', VerifyToken, UserDetails)
// Update user
Routes.patch('/auth/user/update', VerifyToken, UserUpdate)
// Get Dashboard Overview
Routes.get('/dashboard/overview/admin', VerifyToken, DashboardOverview)
// Get all users for admin
Routes.get('/dashboard/users/all', VerifyToken, GetAllUserPaginated)
// Get all donation for admin
Routes.get('/dashboard/donations/all', VerifyToken, GetAllDonationReqPaginated)
// Logout
Routes.post(`/auth/logout`, ClearCookie)
// update user role by admin
Routes.patch('/auth/user/update/role', VerifyToken, UpdateUserRole)
// update user status by admin
Routes.patch('/auth/user/update/status', VerifyToken, UpdateUserStatus)


export { Routes }