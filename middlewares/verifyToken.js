import jwt from 'jsonwebtoken'

const VerifyToken = (req, res, next) => {
    const { accessToken } = req.cookies
    const { uid } = req.query

    if(!accessToken && !uid){
        return  res.send('Unautorized user', 400)
    }

    
    try{
        const decodedToken = jwt.decode(accessToken, process.env.JWT_SECRET)

        if(decodedToken?.uid === uid){
            return next()
        }else{
            res.send('Unautorized user', 400)
        }
    }
    catch(err){
        res.send('Unautorized user', 400)
    }
}

export default VerifyToken