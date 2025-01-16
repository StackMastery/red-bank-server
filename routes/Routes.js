import express from 'express'
import VerifyToken from '../middlewares/verifyToken.js'
import CreateBloodDonation from '../controllers/BloodDonatin/CreateBloodDonation.js'
import { DeleteDonationReq, GetBloodDonationForDonor, GetBLoodDonationReqDetails } from '../controllers/BloodDonatin/BloodDonation.js'

const Routes = express.Router()

//-------- Donation Crud
// Create Donation
Routes.post(`/donation/create`, VerifyToken, CreateBloodDonation)
// Get Blood donation Request with limit
Routes.get(`/donation`, VerifyToken, GetBloodDonationForDonor)
// Get Donation Details By Id
Routes.get(`/donation/details`, GetBLoodDonationReqDetails)
// Delete Blood donation request
Routes.delete(`/donation/delete`, VerifyToken, DeleteDonationReq)


export { Routes }