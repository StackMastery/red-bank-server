import BloodDonation from "../../models/blooddDonation.model.js";

const CreateBloodDonation = async (req, res) => {
    const {
        authorEmail,
        authorName,
        donationDate,
        donationMsg,
        donationTime,
        fullAddress,
        hospitalName,
        recEmail,
        recName,
        bloodGroupe,
    } = req.body;

    const requiredFields = [
        authorEmail, authorName, donationDate, donationMsg, 
        donationTime, fullAddress, hospitalName, recEmail, 
        recName, bloodGroupe
    ];
    
    if (requiredFields.some(field => !field)) {
        return res.status(400).send('All fields are required');
    }

    try {
        const newDonation = new BloodDonation({
            authorEmail,
            authorName,
            donationDate,
            donationMsg,
            donationTime,
            fullAddress,
            hospitalName,
            recEmail,
            recName,
            bloodGroupe,
        });
        await newDonation.save();

        res.status(201).send('Blood donation record created successfully');
    } catch (error) {
        res.status(500).send('Server error: ' + error.message);
    }
};

export default CreateBloodDonation;
