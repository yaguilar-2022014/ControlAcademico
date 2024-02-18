'use strict'

import Course from './course.model.js'
import User from '../user/user.model.js'
import { checkUpdate } from '../utils/validator.js'

export const save = async (req, res) => {
    try {
        let data = req.body
        let user = await User.findOne({ _id: data.teacher })
        if (!user) return res.status(404).send({ message: 'User not found' })
        if (user.role != 'TEACHER') return res.status(400).send({ message: 'User unauthorized' })
        let course = new Course(data)
        await course.save()
        return res.send({ message: 'Course saved successfully!!' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error saving course' })
    }
}

export const get = async (req, res) => {
    try {
        let courses = await Course.find()
        return res.send({ courses })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error getting courses' })
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let update = checkUpdate(data, false)
        if (!update) return res.status(400).send({ message: 'Have submited some data that cannot be updated or missing data' })

        let updatedCourse = await Course.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updatedCourse) return res.status(404).send({ message: 'Course not found, not updated' })
        return res.send({ message: 'Course updated successfully!!', updatedCourse })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error updating course' })
    }
}

export const deleteCourse = async (req, res) => {
    try {
        let {id} = req.params
        let deletedCourse = await Course.deleteOne({_id: id})
        if(deletedCourse.deleteCount == 0) return res.status(404).send({message: 'Course not found, not deleted'})
        return res.send({message: 'Deleted Course successfully!!'})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error deleting course'})
    }
}
