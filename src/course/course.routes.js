'use strict'

import express from 'express'
import { deleteCourse, get, save, update } from './course.controller.js'
import { isTeacher, validateJwt } from '../middlewares/validate-jwt.js'

const api = express.Router()

api.post('/save', [validateJwt, isTeacher], save)
api.get('/get',[validateJwt, isTeacher], get)
api.put('/update/:id',[validateJwt, isTeacher], update)
api.delete('/deleteCourse/:id',[validateJwt, isTeacher], deleteCourse)

export default api