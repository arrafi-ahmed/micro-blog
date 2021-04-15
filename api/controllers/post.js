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
exports.create_upvote = (req, res) => {
  let upvoteCount, downvoteCount
  User.findOne({ upvotes: req.body.postId })
    .then((upvote) => {
      console.log('1')
      console.log(upvote)
      if (!upvote) {
        console.log('2')
        return User.updateOne(
          { _id: req.userId },
          { $push: { upvotes: req.body.postId } }
        )
      } else {
        console.log('3')
        throw new Error('Upvote failed')
      }
    })
    .then((push) => {
      console.log('4')
      if (push.nModified > 0) {
        console.log('5')
        return Post.updateOne(
          { _id: req.body.postId },
          { $inc: { upvote_count: 1 } }
        )
      } else {
        console.log('6')
        throw new Error('Upvote failed')
      }
    })
    .then((upvoteUpdate) => {
      console.log('7')
      if (upvoteUpdate.nModified > 0) {
        console.log('8')
        upvoteCount = upvoteUpdate.upvote_count
        return User.findOne({ downvotes: req.body.postId })
      } else {
        console.log('9')
        throw new Error('Upvote failed')
      }
    })
    .then((downvote) => {
      console.log('10')
      if (downvote) {
        console.log('11')
        return Post.updateOne(
          { _id: req.body.postId },
          { $dec: { downvote_count: 1 } }
        )
      } else {
        res.status(200).json({
          message: 'Upvote successfull',
          upvote: upvoteCount,
        })
      }
    })
    .then((downvoteUpdate) => {
      console.log('12')
      downvoteCount = downvoteUpdate.downvote_count
      res.status(200).json({
        message: 'Upvote successfull',
        upvote: upvoteCount,
        downvote: downvoteCount,
      })
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
      console.log('13')
    })
}
exports.create_downvote = (req, res) => {}
