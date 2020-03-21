var express = require('express')
var router = express.Router()

let Contact= require("./models/contact")

function format(contact) {
  let formatted={...contact._doc, id: contact._id}
  delete formatted._id
  delete formatted.__v
  return formatted
}
  router.get('/persons', (req, res) => {
    Contact
    .find({})
    .then(contacts => {
        res.status(200).json(contacts.map(format))
      })

  })
  router.get('/persons/:id', (req, res) => {
    const id = req.params.id
    Contact
    .findById(id)
    .then(contact => {
      if(contact){
        res.status(200).json(format(contact))
      }else{
        res.status(404).end()
      }

      })
      .catch(error=>res.json(error))
    // const person = persons.find(person => person.id === id )
    // if(person){
    //   res.status(200).json(person)
    // } else {
    //   res.status(404).end()
    // }
  })
  router.delete('/persons/:id', (req, res) => {
    const id = req.params.id
    Contact
    .findByIdAndDelete(id)
    .then(contact => {
      if(contact){
        res.status(204).json(format(contact))
      }else{
        res.status(404).end()
      }

      })
      .catch(error=>res.json(error))

    // persons = persons.filter(person => person.id !== id)
    //
    // res.status(204).end()
  })
  router.post('/persons', (req,res)=>{
    let name=req.body.name
    let number=req.body.number


    if (name === undefined) {
      return res.status(400).json({error: 'name missing'})
    }

    if (number === undefined) {
      return res.status(400).json({error: 'number missing'})
    }

    contact = new Contact({
       name: name,
       number: number

     })
     contact
       .save()
       .then(response => {
           res.status(201).json(format(response))
         })


  })
module.exports=router
