import { URLController } from 'controller/URLController'
import express from 'express'
import {Request, Response} from 'express'

const api = express() 
api.use(express.json())


const urlController = new URLController()
api.post('/shorten', urlController.shorten)

api.listen(5000,  () => console.log('Express listening'))
