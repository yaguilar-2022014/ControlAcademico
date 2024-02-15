'use strict'

import express from 'express'
import { studentRegister } from './user.controller.js'
import { teacherRegister } from './user.controller.js'

const api = express.Router()

api.post('/studentRegister', studentRegister)
api.post('/teacherRegister', teacherRegister)

export default api