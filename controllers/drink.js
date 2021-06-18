const Drink = require('../models').Drink
const User = require('../models').User

const constants = require('../constants')

// finds user, if user found -- each drink with userID found.
const getDrinks = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        
        if (resp != null) {
            const newDrink = {
                name: req.body.name,
                drinkID: req.body.drinkID,
                userID: resp.id
            }

            Drink.findAll({
                where: {userID: resp.id},
            }).then((response) => {
                res.send(response)
            })
          
        } else {
            res.status(constants.BAD_REQUEST).send('Error: Username not found.')
        }
    }).catch(err => {
        res.status(constants.BAD_REQUEST).send(`Error: ${err}`)
    })
    
    
}
// finds user, if user found -- each drink added by user will be tagged with found userID.
const addDrink = (req, res) => {
    User.findOne({
        where: {username: req.params.username}
    }).then(resp => {
        
        if (resp != null) {
            const newDrink = {
                name: req.body.name,
                drinkID: req.body.drinkID,
                userID: resp.id
            }

            Drink.create(newDrink)
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
// removes drink from user list by removing tagged userID 
const deleteDrink = (req, res) => {
    Drink.destroy({where: {id: req.params.id}})
        .then(response => {
            res.status(constants.SUCCESS).send('Drink Deleted.')
        })
}

module.exports = {
  
    getDrinks,
    addDrink,
    deleteDrink
}