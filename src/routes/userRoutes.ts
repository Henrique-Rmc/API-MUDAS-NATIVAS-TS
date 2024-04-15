import { Router } from 'express'
import { createUser, getAllUsers } from '../controllers/userController'


const userRoutes = Router()


userRoutes.route('/')
    .get(getAllUsers)
    .post(createUser)

export {userRoutes}