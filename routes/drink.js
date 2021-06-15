const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')


router.get('/:userID', ctrl.drink.getDrinks)
router.post('/:userID/:id/:drinkName', ctrl.drink.addDrink)
router.delete('/:id', ctrl.drink.deleteDrink)

module.exports = router