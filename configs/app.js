import express from 'express'
import { config } from 'dotenv'
import userRoutes from '../src/user/user.routes.js'
import courseRoutes from '../src/course/course.routes.js'

const app = express()
config()
const port = process.env.PORT || 3200

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/user',userRoutes)
app.use('/course', courseRoutes)

export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}