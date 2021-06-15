const Drink = require('../models').Drink
const User = require('../models').User

const constants = require('../constants')

const createUser = (req, res) => {
    console.log(req.body)
    User.findOne({
        where: {username: req.body.username}
    }).then(resp => {
        console.log("query done")
        if (resp === null) {

            const thisUser = {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }
             
            User.create(thisUser).then(newUser => {
                console.log("create done")
                res.status(constants.SUCCESS).json(newUser)
            })
        } else {
            res.status(constants.BAD_REQUEST).send('Username already in use.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

const loadUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        res.status(constants.SUCCESS).json(resp)
    })
    
}

const loginUser = (req, res) => {
    res.send("loginUser")
}

const updateUser = (req, res) => {
    res.send("updateUser")
}

const deleteUser = (req, res) => {
    res.send("deleteUser")
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    loadUser
}

// const test = {data: [1,2,3,4,5,6]}
// app.get("/", (req, res) => {
//     Drink.findAll({
//         where: {id: 2},
//         include: [{model: User}]
//     }).then((response) => {
//         res.send(response)
//     })
   
    
// })