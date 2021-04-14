const Post = require('../models/post')

exports.get_posts = (req, res) => {
  Post.find({})
    .sort('-createdAt')
    .populate('user', 'username')
    .then((posts) => {
      res.status(200).json({ posts: posts })
    })
    .catch((err) => res.status(500).json({ message: 'Server error' }))
}
exports.create_post = (req, res) => {
  const post = new Post({ ...req.body, user: req.userId })
  post
    .save()
    .then((post) => {
      res.status(200).json({ message: 'Posted successfuly', post })
    })
    .catch((err) => res.status(500).json({ message: 'Server error' }))
}
exports.getCommentsByPost = (req, res) => {
  Post.findOne({ _id: req.body.postId })
    .select('user comments')
    .populate('comments')
    .then((post) => {
      if (post.comments.length > 0) {
        res.status(200).send(post)
      } else {
        res.status(204).json({ message: null })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
