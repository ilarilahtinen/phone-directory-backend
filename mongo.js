const mongoose = require('mongoose')
let Contact= require("./models/contact")
if(process.argv.length==4){
  const contact = new Contact({
      name: process.argv[2],
      number: process.argv[3]

    })
    contact
      .save()
      .then(response => {
          console.log(`adding person ${response.name} number ${response.number} to the directory`)
          mongoose.connection.close()
        })
}
else if(process.argv.length==2){
  Contact
  .find({})
  .then(result => {
    console.log("puhelinluettelo:");
    result.forEach(contact => {
      console.log(`${contact.name} ${contact.number}`)
    })
    mongoose.connection.close()
  }).catch(error=>{
    console.log(error);
    mongoose.connection.close()
  })
}
