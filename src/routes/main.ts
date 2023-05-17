import express from 'express'
import { index } from '../controller/mainController'

const route = express.Router()

route.get('/', index)

export default route