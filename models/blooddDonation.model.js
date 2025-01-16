import mongoose, { Schema } from "mongoose";

const BloodDonationSchema = new mongoose.Schema({
    donationDate: {
        type: Date,
        required: true,
    },
    donationMsg: {
        type: String,
        required: true,
    },
    donationTime: {
        type: String,
        required: true,
    },
    fullAddress: {
        type: String,
        required: true,
    },
    hospitalName: {
        type: String,
        required: true,
    },
    recEmail: {
        type: String,
        required: true,
    },
    recName: {
        type: String,
        required: true,
    },
    bloodGroupe: {
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: 'pending',
    },
    authorEmail:{
        type: String,
        required: true,
    },
    authorName:{
        type: String,
        required: true,
    },
    donorEmail:{
        type: String,
    },
    donorName:{
        type: String,
    },
},{
    timestamps: true
});

const BloodDonation = mongoose.model('BloodDonation', BloodDonationSchema);

export default BloodDonation
