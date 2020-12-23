const Tweet = require('./tweet')

module.exports = class User {
  tweets = []
  followers = []
  following = []
  likedTweets = []
  bio = ''
  birthDate = null
  profilePicture = null
  joinedAt = Date.now()
  location = null

  constructor(handle, email) {
    this.handle = handle
    this.email = email
  }
  tweet(body, attachments) {
    const tweet = new Tweet(this, body, attachments)
    this.tweets.push(tweet)
    return tweet
  }
  like(tweet) {
    this.likedTweets.push(tweet)
    tweet.likes.push(this)
  }
  retweet(tweet, body = '', attachments = []) {
    const retweet = new Tweet(this, body, attachments)
    retweet.originalTweet = tweet
    this.tweets.push(retweet)
    tweet.retweets.push(this.retweet)

    return retweet
  }
}
