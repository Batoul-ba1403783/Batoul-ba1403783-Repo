import express from 'express'
import morgan from 'morgan'
import router from './routes.js'
import mongoose from 'mongoose'
import productRepository from './repository/product-repo.js'

const port = 5000
const app = express()
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

mongoose.connect('mongodb://localhost/productManager',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, async function (err) {
        if (err) {
            console.log("Failed to connect to monogoDb " + err);
            return;
        }
        else {
            const database = await productRepository.initDB();
            app.listen(port, () => {
                console.log(`Server started @http://localhost:${port}`)
                console.log(`Successfully connected to the database !`)
            })
        }
    });