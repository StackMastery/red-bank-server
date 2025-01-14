import jwt from "jsonwebtoken";

const CreateAccesToken = async (req, res) => {
    const { uid } = req.query;

    try {
        if (!uid) {
            return res.status(400).send({ success: false, message: 'Uid is required' });
        }

        // Create JWT token
        const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn: '1h' });  

        // Determine SameSite value based on environment
        const sameSiteValue = process.env.NODE_ENV === 'production' ? 'None' : 'Lax';

        // Set the token in the cookie
        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',  
            sameSite: sameSiteValue,
        });

        // Respond with success
        return res.send({ success: true });
    } catch (err) {
        // Handle errors properly
        console.error('Error creating access token:', err);
        return res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

export default CreateAccesToken;
