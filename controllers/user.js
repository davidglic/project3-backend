const Drink = require('../models').Drink
const User = require('../models').User

const newUser = (req, res) => {
    res.send("newUser")
}

const loadUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        res.send(resp).json()
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
    newUser,
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