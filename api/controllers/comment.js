const Comment = require('../models/comment')
const Post = require('../models/post')

exports.create_comment = (req, res) => {
  const comment = new Comment({ ...req.body, user_id: req.userId })
  comment
    .save()
    .then((comment) => {
      return Post.updateOne(
        { _id: comment.post_id },
        { $push: { comments: comment._id } }
      )
    })
    .then((response) => {
      if (response.nModified == 0) throw new Error('Comment failed')

      res.status(200).json({ message: 'Comment successful' })
    })
    .catch((err) => {
      if (err.message == 'Comment failed')
        res.status(400).json({ message: err.message })

      res.status(500).json({ message: 'Server error' })
    })
}
