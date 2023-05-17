import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import main from './routes/main'
import { errorMiddleware } from './middleware/errorHandling'

dotenv.config()

const app = express()
const port = process.env.APP_PORT || 3000
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(main)

// error handling middleware
app.use(errorMiddleware);

app.listen(port, () => {
    console.log('Listening to ' + port)
})