import express from 'express'
import VerifyToken from '../middlewares/verifyToken.js'
import CreateBloodDonation from '../controllers/BloodDonatin/CreateBloodDonation.js'
import { GetBloodDonationForDonor } from '../controllers/BloodDonatin/GetBloodDonation.js'

const Routes = express.Router()

//-------- Donation Crud
// Create Donation
Routes.post(`/donation/create`, VerifyToken, CreateBloodDonation)
// Get Blood donation Request with limit
Routes.get(`/donation`, VerifyToken, GetBloodDonationForDonor)


export { Routes }