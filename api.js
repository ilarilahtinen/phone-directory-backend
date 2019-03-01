var express = require('express')
var router = express.Router()
let persons= [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Martti Tienari",
      "number": "040-123456",
      "id": 2
    },
    {
      "name": "Arto Järvinen",
      "number": "040-123456",
      "id": 3
    },
    {
      "name": "Lea Kutvonen",
      "number": "040-123456",
      "id": 4
    }
  ]

  router.get('/persons', (req, res) => {
    res.status(200).json(persons)
  })
  router.get('/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id )
    if(person){
      res.status(200).json(person)
    } else {
      res.status(404).end()
    }
  })
  router.delete('/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)

    res.status(204).end()
  })
  router.post('/persons', (req,res)=>{
    let name=req.body.name
    let number=req.body.number
    let id =Math.floor(Math.random() * 54321);

    if (name === undefined) {
      return res.status(400).json({error: 'name missing'})
    }

    if (number === undefined) {
      return res.status(400).json({error: 'number missing'})
    }
    if (persons.find(person=> person.name===name)){
      return res.status(400).json({error: 'name already in list'})
    }
    let newPerson={name,number,id}
    persons.push(newPerson)
    res.status(201).json(newPerson)
  })
module.exports=router
