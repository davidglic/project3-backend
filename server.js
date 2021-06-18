//imports
const express = require('express')
const app = express()
const cors = require('cors');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
}

app.use(cors(corsOptions))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false})) //apply this to all app requests. gives us req.body

app.use(bodyParser.json());

const routes = require('./routes')

//routes
app.use('/drink', routes.drink) 
app.use('/user', routes.user)

//run server
app.listen(3001, () => {
    console.log("Server started on port 3001.")
})