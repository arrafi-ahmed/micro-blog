const User = require('../models/user')
const jwt = require('jsonwebtoken')

exports.is_user_exist = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'User exist', exist: true })
      } else {
        res.status(204).json({ message: 'User does not exist', exist: false })
      }
    })
    .catch((err) => res.status(500).json({ message: 'Server error' }))
}
exports.create_user = (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then((user) => {
      const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
      res
        .status(200)
        .header('authorization', token)
        .json({ message: 'Registration successful' })
    })
    .catch((err) => res.status(500).json({ message: 'Registration failed' }))
}
exports.check_credentials = (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user) {
        if (user.password == req.body.password) {
          const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)

          res
            .status(200)
            .header('authorization', token)
            .json({ message: 'Login successful', valid: true })
        } else {
          res.status(401).json({ message: 'Invalid credentials', valid: false })
        }
      } else {
        res.status(401).json({ message: 'User doesn not exist', valid: false })
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Server error' })
    })
}
exports.get_posts_by_user_id = (req, res) => {
  User.findOne({ _id: req.body.userId })
    .select('username createdAt')
    .populate({ path: 'posts', options: { sort: { createdAt: -1 } } })
    .then((user) => {
      res.status(200).json({ user })
    })
    .catch((err) => res.status(500).json({ message: 'Server error' }))
}
