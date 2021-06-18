const Drink = require('../models').Drink
const User = require('../models').User

const constants = require('../constants')

//targets username -- if username not in use allows the creation of thisUser thus creating newUser
const createUser = (req, res) => {
    
    User.findOne({
        where: {username: req.body.username}
    }).then(resp => {
        
        if (resp === null) {

            const thisUser = {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }
             
            User.create(thisUser).then(newUser => {
                
                res.status(constants.SUCCESS).json(newUser)
            })
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username already in use.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

// targets username -- when found loads user info
const loadUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        res.status(constants.SUCCESS).json(resp)
    })
    
}

// targets username -- if found checks password accuracy
const loginUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        
        if (resp != null) {

           req.body.password === resp.password ?
                res.status(constants.SUCCESS).json(resp)
                :
                res.status(constants.FORBIDDEN).send(`Password Incorrect.`)
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

// targets username -- if found allows user to target found info and update information to updatedUser
const updateUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        
        if (resp != null) {
            const updatedUser = {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }

            User.update(updatedUser, {where: {id: resp.id}, returning: true})
                .then(response => {
                    res.status(constants.SUCCESS).json(response)
                })
          
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

// targets username -- if found allows user to delete all information associated to username
const deleteUser = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        
        if (resp != null) {            
            
            //destroy sesssion here in future....
            User.destroy({where: {id: resp.id}})
                .then(response => {
                    res.status(constants.SUCCESS).send('User Deleted.')
                })
          
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    loadUser
}