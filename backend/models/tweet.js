module.exports = class Tweet {
  likes = []
  retweets = []
  originalTweet = null
  createdAt = Date.now()

  constructor(author, body, attachments) {
    this.author = author
    this.body = body
    this.attachments = attachments
  }
}
