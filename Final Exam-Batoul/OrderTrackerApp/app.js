//Todo 1.5 [10 points]: implement the server and connect the database. You should name the database "order-tracker.db"

import express from "express"
import router from './router.js'
import mongoose from 'mongoose'
import morgan from 'morgan'

const port = 8080
const app = express()

//I used mongdb Atlas
const URI = `mongodb+srv://ba1403783:1qaz@wsx@cluster0.n1dh6.mongodb.net/order-tracker-batoul?retryWrites=true&w=majority`

const options = {useNewUrlParser: true, useUnifiedTopology: true}

mongoose.connect(URI, options ,()=>{
    console.log('Connected to the database successfully')
})

app.use(express.json())

app.use(express.static('public'))

app.use(morgan)
app.use('/api', router)

app.listen(port, () => {
    console.log(`Server started @http://localhost:${port}`)
})

