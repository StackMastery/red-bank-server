import mongoose from 'mongoose'

const connectToDatabase = async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_DB_URI}/redbank`)
        console.log(`Mongo DB connection succesfull to ${conn.connection.db.databaseName}`)
    }
    catch(err){
        throw err
    }
}
export { connectToDatabase }