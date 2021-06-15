const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.post('/new', ctrl.user.newUser)
router.get('/:username', ctrl.user.loginUser)
router.post('/:id', ctrl.user.updateUser)
router.delete('/:id', ctrl.user.deleteUser)

module.exports = router