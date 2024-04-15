import mongoose from "mongoose";
import dotenv from 'dotenv'

const connectDb = async () => {

    dotenv.config()
    
    try {
        if (!process.env.DATABASE_URI) {
            throw new Error("Variável Ambiente não definida")
        }
        await mongoose.connect(process.env.DATABASE_URI, {
        })
    } catch (error) {
        console.log(error)
    }
}

export default connectDb