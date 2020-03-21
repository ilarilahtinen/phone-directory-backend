const mongoose = require('mongoose')

// Replace with the URL of your own database. Do not store the password on GitLab!
const url = `mongodb+srv://contact:${process.env.DB_PWD}@cluster0-yf1ev.mongodb.net/contacts`
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url,{ useNewUrlParser: true })

const Contact = mongoose.model('person', {
  name: String,
  number: String
})

module.exports=Contact
