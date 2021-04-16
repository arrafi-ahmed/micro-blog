const Post = require('../models/post')
const User = require('../models/user')

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
      if (post) {
        return User.updateOne(
          { _id: req.userId },
          { $push: { posts: post._id } }
        )
      } else {
        throw new Error('Post failed')
      }
    })
    .then((response) => {
      if (response.nModified > 0) {
        res.status(200).json({ message: 'Posted successfuly', post })
      } else {
        throw new Error('Post failed')
      }
    })
    .catch((err) => res.status(500).json({ message: 'Server error' }))
}
exports.get_comments_by_post = (req, res) => {
  Post.findOne({ _id: req.body.postId })
    .select('comments')
    .populate({
      path: 'comments',
      model: 'Comment',
      populate: { path: 'user_id', model: 'User', select: 'username' },
    })
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
exports.create_upvote = (req, res) => {
  User.findById(req.userId)
    .then((user) => {
      // check if post not in upvotes and insert
      if (user.upvotes.indexOf(req.body.postId) === -1) {
        User.updateOne(
          { _id: req.userId },
          { $push: { upvotes: req.body.postId } }
        )
          .then((user) => {
            // increase upvote count
            if (user.nModified > 0) {
              return Post.updateOne(
                { _id: req.body.postId },
                { $inc: { upvote_count: 1 } }
              )
            } else {
              throw new Error('Upvote failed')
            }
          })
          .then((post) => {
            // check if post in downvotes and remove
            if (user.downvotes.indexOf(req.body.postId) !== -1) {
              return User.updateOne(
                { _id: req.userId },
                { $pull: { downvotes: req.body.postId } }
              )
            } else {
              res.status(200).json({
                message: 'Upvote successfull',
                changeDownvote: false,
              })
            }
          })
          .then((user) => {
            // decrease downvote count
            if (user.nModified > 0) {
              return Post.updateOne(
                { _id: req.body.postId },
                { $inc: { downvote_count: -1 } }
              )
            } else {
              throw new Error('Upvote failed')
            }
          })
          .then((post) => {
            if (post.nModified > 0) {
              res.status(200).json({
                message: 'Upvote successfull',
                changeDownvote: true,
              })
            } else {
              throw new Error('Upvote failed')
            }
          })
          .catch((err) => {
            res.status(500).json({ message: 'Server error' })
          })
      } else {
        throw new Error('Upvote failed')
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
exports.create_downvote = (req, res) => {
  User.findById(req.userId)
    .then((user) => {
      // check if post not in downvotes and insert
      if (user.downvotes.indexOf(req.body.postId) === -1) {
        User.updateOne(
          { _id: req.userId },
          { $push: { downvotes: req.body.postId } }
        )
          .then((user) => {
            // increase downvote count
            if (user.nModified > 0) {
              return Post.updateOne(
                { _id: req.body.postId },
                { $inc: { downvote_count: 1 } }
              )
            } else {
              throw new Error('Downvote failed')
            }
          })
          .then((post) => {
            // check if post in upvotes and remove
            if (user.upvotes.indexOf(req.body.postId) !== -1) {
              return User.updateOne(
                { _id: req.userId },
                { $pull: { upvotes: req.body.postId } }
              )
            } else {
              res.status(200).json({
                message: 'Downvote successfull',
                changeUpvote: false,
              })
            }
          })
          .then((user) => {
            // decrease upvote count
            if (user.nModified > 0) {
              return Post.updateOne(
                { _id: req.body.postId },
                { $inc: { upvote_count: -1 } }
              )
            } else {
              throw new Error('Downvote failed')
            }
          })
          .then((post) => {
            if (post.nModified > 0) {
              res.status(200).json({
                message: 'Downvote successfull',
                changeUpvote: true,
              })
            } else {
              throw new Error('Downvote failed')
            }
          })
          .catch((err) => {
            res.status(500).json({ message: 'Server error' })
          })
      } else {
        throw new Error('Downvote failed')
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
