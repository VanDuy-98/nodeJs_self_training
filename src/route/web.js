import express from "express";
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/edit-user/:id', homeController.getEditPage)
    router.post('/update-user', homeController.updateUser)
    router.get('/upload', homeController.getUploadFilePage)

    const cb0 = function (req, res, next) {
        console.log('CB0')
        next()
    }

    const cb1 = function (req, res, next) {
        console.log('CB1')
        next()
    }

    router.get('/example/d', [cb0, cb1], (req, res, next) => {
        console.log('the response will be sent by the next function ...')
        next()
    }, (req, res) => {
        res.send('Hello from D!')
    })

    return app.use('/', router)
}

export default initWebRoute