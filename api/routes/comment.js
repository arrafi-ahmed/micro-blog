const router = require('express').Router()
const commentController = require('../controllers/comment')
const authToken = require('../middlewares/auth-token')

router.post('/createComment', authToken, commentController.create_comment)

module.exports = router
