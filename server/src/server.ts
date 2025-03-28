import express, { json } from 'express'
import cors from 'cors'
import router from './routes'
import { errorHandler } from './middleware/errorHandler'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:5000/Game'
const port = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(json())

app.use(router)
app.use(errorHandler)

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('App is connected to database')
        app.listen(port, () => {
            console.log(`App is listening on port: ${port}.`)
        })
    })