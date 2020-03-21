const express = require('express')
const app = express()
const path = require('path');
const api = require('./api')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req,res,next){
  res.set("Access-Control-Allow-Origin","*")
  next()
})
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use('/api',api)



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
module.exports = app;
