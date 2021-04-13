const router = require('express').Router()
const postController = require('../controllers/post')
const authToken = require('../middlewares/auth-token')

router.get('/getPosts', postController.get_posts)
router.post('/createPost', authToken, postController.create_post)

module.exports = router
