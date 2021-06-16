const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.post('/new', ctrl.user.createUser)
router.put('/login/:username', ctrl.user.loginUser)
router.get('/:username', ctrl.user.loadUser)
router.put('/:username', ctrl.user.updateUser)
router.delete('/:username', ctrl.user.deleteUser)

module.exports = router