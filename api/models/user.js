const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
      default: undefined,
    },
    upvotes: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
      default: undefined,
    },
    downvotes: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
      default: undefined,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
