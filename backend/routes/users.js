var express = require('express')
var router = express.Router()

const User = require('../models/user')
const users = []

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(users)
})
router.get('/initialize', (req, res, next) => {
  const hilmi = new User('hlmgnc', 'hlmgnc@gmail.com')
  const semih = new User('smhgnc', 'asemihgenc@gmail.com')
  const tugce = new User('tgcgnc', 'tugcebir@gmail.com')

  const hilmisTweet = hilmi.tweet('This is my tweet')
  // semih.like(hilmisTweet)
  tugce.retweet(hilmisTweet)

  users.push(hilmi, semih, tugce)
  res.send('OK')
})
router.get('/:id', (req, res, next) => {
  res.send(users[req.params.id])
})

module.exports = router
