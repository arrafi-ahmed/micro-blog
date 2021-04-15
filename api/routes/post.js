const router = require('express').Router()
const postController = require('../controllers/post')
const authToken = require('../middlewares/auth-token')

router.get('/getPosts', postController.get_posts)
router.post('/createPost', authToken, postController.create_post)
router.post('/getCommentsByPost', postController.get_comments_by_post)
router.post('/createUpvote', authToken, postController.create_upvote)
router.post('/createDownvote', authToken, postController.create_downvote)

module.exports = router
