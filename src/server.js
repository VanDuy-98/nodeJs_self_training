import express from "express";
import configViewEngine from "./configs/viewEngine";
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8008

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send('my name is Van Duy')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port} at http://localhost:${port}`)
})