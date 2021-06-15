const express = require('express')
const router = express.Router()
const ctrl = require('../controllers')

router.post('/new', ctrl.user.newUser)
router.get('/login/:username', ctrl.user.loginUser)
router.get('/:username', ctrl.user.loadUser)
router.post('/:username', ctrl.user.updateUser)
router.delete('/:username', ctrl.user.deleteUser)

module.exports = router