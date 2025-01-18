import BlogModel from '../../models/blog.model.js';
import crypto from 'crypto'

const VerifyPermalLink = async (req, res) => {
    const { link } = req.query

    try{
        const findBlog = await BlogModel.findOne({permaLink: link})

        if(!findBlog){
            res.send({permaLink: link})
        }
        const uniqueString = crypto.randomBytes(5).toString('hex')
        res.send({permaLink: `${link}-${uniqueString}`})
    }   
    catch(err){
        
    }
}

export default VerifyPermalLink