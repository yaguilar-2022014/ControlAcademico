'use strict'

import express from 'express'
import { regist } from './user.controller.js'

const api = express.Router()

api.post('/regist', regist)

export default api