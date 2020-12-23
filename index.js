const hilmi = new User('hlmgnc', 'hlmgnc@gmail.com')
const semih = new User('smhgnc', 'asemihgenc@gmail.com')
const tugce = new User('tgcgnc', 'tugcebir@gmail.com')

const hilmisTweet = hilmi.tweet('This is my tweet')
semih.like(hilmisTweet)
tugce.retweet(hilmisTweet)

console.log(hilmi)
