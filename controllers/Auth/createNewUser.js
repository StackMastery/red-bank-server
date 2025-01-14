import { UserModel } from "../../models/user.model.js"

const CreateNewUser = async (req, res) => {
    const {
        email, 
        uid, 
        name,
        avatar,
        bloodGroup,
        district,
        upazila,
    } = req.body

    if(!email || !uid || !name || !avatar || !bloodGroup || !district || !upazila){
        res.send('Must you need to require email,uid,name,avatar,bloodGroup,district,upazila', 400)
        return
    }

    try{
        const newUser = UserModel({
            email, 
            uid, 
            name,
            avatar,
            bloodGroup,
            district,
            upazila,
        })

        const userData = await newUser.save() 
        res.send(userData, 200)
    }
    catch(err){
        res.status(500).send('Internal Server Error');
    }
}

export default CreateNewUser