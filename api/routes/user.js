const router = require('express').Router()
userController = require('../controllers/user')
const authToken = require('../middlewares/auth-token')

// router.get('/createUser', userController.create_user)

module.exports = router
