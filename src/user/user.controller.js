'use strict'

import User from './user.model.js'
import { checkPassword, checkUpdate, encrypt } from '../utils/validator.js'
import { generateJwt } from '../utils/jwt.js'

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

export const test = async () => {
    try {

        const existe = await User.findOne({
            name: 'Teacher',
        });

        if (existe) {
            console.log('El usuario ya existe')
            return
        }

        let data = {
            name: 'Teacher',
            surname: 'Teacher',
            email: 'Teacher@gmail.com',
            password: '12345',
            role: 'TEACHER'
        }

        data.password = await encrypt(data.password)

        let user = new User(data)
        await user.save()
        return { message: 'User Registered successfully!!' }
    } catch (err) {
        console.error(err)
        return { message: 'Error registering user', err }
    }
}

export const login = async (req, res) => {
    let { name, password } = req.body
    let user = await User.findOne({ name })
    if (user && await checkPassword(password, user.password)) {
        let loggedUser = {
            uid: user._id,
            name: user.name,
            role: user.role
        }
        let token = await generateJwt(loggedUser)
        return res.send({ message: `Welcome ${user.name}`, loggedUser, token })
    }
    return res.status(404).send({ message: 'Invalid Credentials' })
}

/*export const courseAsign = async(req, res)=>{
    try {
        let {id} = req.params
        let data = {name: req.body.name}
        let update = checkUpdate(data, false)
        if(!update) return res.status(400).send({message: 'Have submited some data that cannot be updated or missing data'})

        let updatedUser = await User.findOneAndUpdate(
            {_id: id},
            data,
            {new: false}
        )
        if(!updatedUser) return res.status(404).send({message: 'User not found, not updated'})
        return res.send({message: 'User updated successfully!!'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error updating user'})
    }
}*/

export const courseAsign = async (req, res) => {
    try {
        let { id } = req.params
        let {courses} = req.body
        let user = await User.findById(id)
        if(!user) return res.status(404).send({message: 'User not found or not exists'})
        if(user.courses.length >= 3) return res.status(400).send({message: 'User have maximum courses'})

        user.courses = courses
        await user.save()
        return res.send({message: 'Courses asigned successfully!!'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error asigning courses'})
    }
}
