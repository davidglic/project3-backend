const Drink = require('../models').Drink
const User = require('../models').User

const constants = require('../constants')

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
                // include: [{model: User}]
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

// const test = {data: [1,2,3,4,5,6]}
// app.get("/", (req, res) => {
//     Drink.findAll({
//         where: {id: 2},
//         include: [{model: User}]
//     }).then((response) => {
//         res.send(response)
//     })
   
    
// })