import express from 'express'
import VerifyToken from '../middlewares/verifyToken.js'
import CreateBloodDonation from '../controllers/BloodDonatin/CreateBloodDonation.js'

const Routes = express.Router()

//-------- Donation Crud
// Create Donation
Routes.post(`/donation/create`, VerifyToken, CreateBloodDonation)


export { Routes }