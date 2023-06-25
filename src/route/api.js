import express from "express";
import APIController from '../controller/APIController'

let router = express.Router()

const initApiRoute = (app) => {
    router.get('/users', APIController.getAllUsers) // method GET -> READ data
    router.post('/users', APIController.createNewUser) // method POST -> CREATE data
    router.put('/users', APIController.updateUser) // method PUT -> UPDATE data
    router.delete('/users/:id', APIController.deleteUser) // method POST -> DELETE data

    return app.use('/api/v1/', router)
}

export default initApiRoute