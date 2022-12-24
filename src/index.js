import express from 'express'
import dotenv from 'dotenv'
import initRouter from './routes/initRouter.js'
import connet from './config/connetDB.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT

connet()
initRouter(app)


app.listen( PORT ,() => {
    console.log(`connet back-end http://localhost:${PORT}`)
})