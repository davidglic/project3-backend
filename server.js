//imports
const express = require('express')
const app = express()
// const Drink = require('./models').Drink
// const User = require('./models').User
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false})) //apply this to all app requests. gives us req.body

app.use(bodyParser.json());

const routes = require('./routes')

//routes
app.use('/drink', routes.drink) 
app.use('/user', routes.user)

// const test = {data: [1,2,3,4,5,6]}
// app.get("/", (req, res) => {
//     Drink.findAll({
//         where: {id: 2},
//         include: [{model: User}]
//     }).then((response) => {
//         res.send(response)
//     })
   
    
// })

//run server
app.listen(3001, () => {
    console.log("Server started on port 3001.")
})