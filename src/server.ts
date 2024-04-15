import express from 'express'
import mongoose from 'mongoose'
import connectDb from './config/dbConn'
import { userRoutes } from './routes/userRoutes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'
// const port = process.env.PORT


const uri = "mongodb+srv://mydb:mydb@cluster0.ug5z9it.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
    // express.urlencoded({extended: true}), 
    express.json()
    )
const port = 3333

mongoose.connection.once('open', () => {
    console.log('Connnected to MongoDb')
    app.listen(port || 3000, () => console.log("working"))
})
connectDb()

app.use('/user', userRoutes)
        
