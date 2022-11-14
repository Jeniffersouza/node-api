const routerUsuario = require('express').Router()
const Person = require('../models/Person')


routerUsuario.get('/', async (req,res) =>{


  try {

    const people = await Person.find()
    
    return res.status(200).json(people)

  } catch (e) {
    return res.status(500).json({erro: 'não foi possivel encontrar usuarios'})
  }
 
})



routerUsuario.get('/:id', async (req,res) =>{

  const id = req.params.id

  try {

    
    const person = await Person.findOne({_id : id})
    return res.status(200).json(person)

  } catch (e) {
    return res.status(500).json({erro: 'não foi possivel encontrar usuarios'})
  }
 
})


module.exports = routerUsuario