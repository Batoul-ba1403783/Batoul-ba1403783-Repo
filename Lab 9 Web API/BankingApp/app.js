import express from 'express'

//port number
const port = 3000

const app = express()

//Web server
app.use(express.static('Public'))

//web services (routes)
app.get('/api/greetings', (req, res)=>{
    res.send('Welcome to the server side')
})

app.listen(port, ()=>{
    console.log(`Server started @http://localhost:${port}`)
})