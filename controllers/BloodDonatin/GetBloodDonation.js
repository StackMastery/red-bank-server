import BloodDonation from '../../models/blooddDonation.model.js'

const GetBloodDonation = async (req, res) => {

    const { postId } = req.query

    try{
        const postDetails = await BloodDonation.findById(postId)

        if(!postDetails){
            res.send({error: 'post notfound'}, 400)
            return
        }

        res.send(postDetails)
    }
    catch(err){
        res.send({error: 'something went wrong'}, 400)
    }
}

export default GetBloodDonation