const router = require('express').Router()
const Person = require('../models/Person')


router.post('/', async (req,res) => {

  const {name, email, senha} = req.body

  if(!name){
    res.status(500).json({erro: 'O nome é obrigatório!'})
  }
  if(!email){
    res.status(500).json({erro: 'O email é obrigatório!'})
  }
  if(!senha){
    res.status(500).json({erro: 'Senha é obrigatório!'})
  }

  const person = {
    name,
    email,
    senha
  }


try {

  await Person.create(person)
  
  return res.status(201).json({msg: 'Usuario criado com sucesso!'})

} catch (e) {
  return res.status(500).json({erro: 'não foi possivel cadastrar o usuario'})
}
})


module.exports = router