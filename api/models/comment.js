const mongoose = require('mongoose')

const commentSchema = mongoose.Schema(
  {
    details: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', commentSchema)
