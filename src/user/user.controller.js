'use strict'

import User from './user.model.js'
import { encrypt } from '../utils/validator.js'

/*//Registrar Alumnos
export const studentRegister = async(req, res)=>{
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'STUDENT'
        let user = new User(data)
        await user.save()
        return res.send({message: 'Student Registered successfully !!'})
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error registering student', err})
    }
}

//Registrar Profesores
export const teacherRegister = async(req, res)=>{
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'TEACHER'
        let user = new User(data)
        await user.save()
        return res.send({message: 'Teacher Registered succesfully !!'})
    } catch (err) {
        console.log(err)
        return res.status(500).send({message: 'Error registering tecaher', err})
    }
}*/

//Registrar
export const regist = async (req, res) => {
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        data.role = 'USER'
        let user = new User(data)
        await user.save()
        return res.send({ message: 'User Registered successfully!!' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering user', err })
    }
}

export const test = async (req, res) => {
    try {
        let data = {
            name: 'Teacher',
            surname: 'Teacher',
            email: 'Teacher@gmail.com',
            password: '12345',
            role: 'TEACHER'
        }

        let user = new User(data)
        await user.save()
        return res.send({ message: 'User Registered successfully!!' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error registering user', err })
    }
}
