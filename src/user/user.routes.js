'use strict'

import express from 'express'
import { courseAsign, login, regist } from './user.controller.js'

const api = express.Router()

api.post('/regist', regist)
api.post('/login', login)
api.put('/courseAsign/:id', courseAsign)

export default api