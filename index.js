const express = require('express')
const app = express()
const api = require('./api')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req,res,next){
  res.set("Access-Control-Allow-Origin","*")
  next()
})
app.get('/', (req,res)=>{
  res.json({ok:"ok"})
})
app.use('/api',api)



const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
module.exports = app;
